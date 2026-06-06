"use client";

import { useState } from "react";
import type { ToolId } from "@/lib/tools";

const inputClass =
  "mt-2 w-full rounded-xl border border-ink/10 bg-white px-4 py-3 outline-none focus:border-accent focus:ring-2 focus:ring-accent/15";
const labelClass = "text-sm font-semibold text-ink";
const resultClass = "rounded-xl border border-accent/15 bg-accent/5 p-5";

function Result({ children }: { children: React.ReactNode }) {
  return <div className={resultClass}>{children}</div>;
}

function NumInput({
  label,
  value,
  onChange,
  placeholder,
}: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  placeholder?: string;
}) {
  return (
    <label className="block">
      <span className={labelClass}>{label}</span>
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={inputClass}
        placeholder={placeholder}
      />
    </label>
  );
}

export function GstCalculator() {
  const [amount, setAmount] = useState("");
  const [rate, setRate] = useState(18);
  const base = parseFloat(amount) || 0;
  const gst = (base * rate) / 100;
  const total = base + gst;

  return (
    <div className="space-y-4">
      <NumInput label="Amount (excl. GST) ₹" value={amount} onChange={setAmount} placeholder="10000" />
      <label className="block">
        <span className={labelClass}>GST rate %</span>
        <select
          value={rate}
          onChange={(e) => setRate(Number(e.target.value))}
          className={inputClass}
        >
          {[0, 5, 12, 18, 28].map((r) => (
            <option key={r} value={r}>
              {r}%
            </option>
          ))}
        </select>
      </label>
      <Result>
        <p className="text-sm text-muted">
          GST: <strong className="text-ink">₹{gst.toLocaleString("en-IN", { maximumFractionDigits: 2 })}</strong>
        </p>
        <p className="mt-1 text-sm text-muted">
          Total: <strong className="text-accent">₹{total.toLocaleString("en-IN", { maximumFractionDigits: 2 })}</strong>
        </p>
      </Result>
    </div>
  );
}

export function BurnRateCalculator() {
  const [rent, setRent] = useState("");
  const [salaries, setSalaries] = useState("");
  const [ops, setOps] = useState("");
  const [other, setOther] = useState("");
  const total =
    (parseFloat(rent) || 0) +
    (parseFloat(salaries) || 0) +
    (parseFloat(ops) || 0) +
    (parseFloat(other) || 0);

  return (
    <div className="space-y-4">
      <NumInput label="Rent & facilities ₹" value={rent} onChange={setRent} />
      <NumInput label="Salaries & contractors ₹" value={salaries} onChange={setSalaries} />
      <NumInput label="Software & ops ₹" value={ops} onChange={setOps} />
      <NumInput label="Other monthly costs ₹" value={other} onChange={setOther} />
      <Result>
        <p className="text-sm text-muted">Estimated monthly burn</p>
        <p className="font-display text-3xl font-bold text-accent">
          ₹{total.toLocaleString("en-IN", { maximumFractionDigits: 0 })}
        </p>
      </Result>
    </div>
  );
}

export function RunwayCalculator() {
  const [cash, setCash] = useState("");
  const [burn, setBurn] = useState("");
  const c = parseFloat(cash) || 0;
  const b = parseFloat(burn) || 0;
  const months = b > 0 ? (c / b).toFixed(1) : "—";

  return (
    <div className="space-y-4">
      <NumInput label="Cash in bank ₹" value={cash} onChange={setCash} />
      <NumInput label="Monthly burn ₹" value={burn} onChange={setBurn} />
      <Result>
        <p className="text-sm text-muted">Estimated runway</p>
        <p className="font-display text-3xl font-bold text-accent">{months} months</p>
      </Result>
    </div>
  );
}

export function IncorporationCostCalculator() {
  const [structure, setStructure] = useState<"pvt" | "llp" | "opc">("pvt");
  const [stateFees, setStateFees] = useState("8000");
  const base = { pvt: 12000, llp: 9000, opc: 10000 }[structure];
  const gov = parseFloat(stateFees) || 0;
  const professional = base;
  const total = gov + professional;

  return (
    <div className="space-y-4">
      <label className="block">
        <span className={labelClass}>Structure</span>
        <select
          value={structure}
          onChange={(e) => setStructure(e.target.value as "pvt" | "llp" | "opc")}
          className={inputClass}
        >
          <option value="pvt">Private Limited</option>
          <option value="llp">LLP</option>
          <option value="opc">OPC</option>
        </select>
      </label>
      <NumInput
        label="Est. government fees ₹"
        value={stateFees}
        onChange={setStateFees}
        placeholder="8000"
      />
      <Result>
        <p className="text-sm text-muted">
          Professional fees (est.): <strong className="text-ink">₹{professional.toLocaleString("en-IN")}</strong>
        </p>
        <p className="mt-1 text-sm text-muted">
          Total budget: <strong className="text-accent">₹{total.toLocaleString("en-IN")}</strong>
        </p>
        <p className="mt-3 text-xs text-muted/80">Indicative only — actual fees vary by state and capital.</p>
      </Result>
    </div>
  );
}

export function TdsCalculator() {
  const [amount, setAmount] = useState("");
  const [rate, setRate] = useState(10);
  const base = parseFloat(amount) || 0;
  const tds = (base * rate) / 100;
  const net = base - tds;

  return (
    <div className="space-y-4">
      <NumInput label="Payment amount ₹" value={amount} onChange={setAmount} />
      <label className="block">
        <span className={labelClass}>TDS rate %</span>
        <select
          value={rate}
          onChange={(e) => setRate(Number(e.target.value))}
          className={inputClass}
        >
          <option value={1}>1% (194C – individuals)</option>
          <option value={2}>2% (194C – others)</option>
          <option value={10}>10% (194J – professional)</option>
          <option value={5}>5% (194H – commission)</option>
        </select>
      </label>
      <Result>
        <p className="text-sm text-muted">
          TDS to deduct: <strong className="text-ink">₹{tds.toLocaleString("en-IN", { maximumFractionDigits: 2 })}</strong>
        </p>
        <p className="mt-1 text-sm text-muted">
          Net payable: <strong className="text-accent">₹{net.toLocaleString("en-IN", { maximumFractionDigits: 2 })}</strong>
        </p>
      </Result>
    </div>
  );
}

export function EmployeeCostCalculator() {
  const [ctc, setCtc] = useState("");
  const annual = parseFloat(ctc) || 0;
  const monthly = annual / 12;
  const employerPf = monthly * 0.12 * 0.5;
  const inHandEst = monthly * 0.72;

  return (
    <div className="space-y-4">
      <NumInput label="Annual CTC ₹" value={ctc} onChange={setCtc} placeholder="1200000" />
      <Result>
        <p className="text-sm text-muted">
          Monthly CTC: <strong className="text-ink">₹{monthly.toLocaleString("en-IN", { maximumFractionDigits: 0 })}</strong>
        </p>
        <p className="mt-1 text-sm text-muted">
          Est. employer PF: <strong className="text-ink">₹{employerPf.toLocaleString("en-IN", { maximumFractionDigits: 0 })}</strong>
        </p>
        <p className="mt-1 text-sm text-muted">
          Est. in-hand (monthly): <strong className="text-accent">₹{inHandEst.toLocaleString("en-IN", { maximumFractionDigits: 0 })}</strong>
        </p>
        <p className="mt-3 text-xs text-muted/80">Simplified estimate; actual depends on tax regime and allowances.</p>
      </Result>
    </div>
  );
}

export function BreakEvenCalculator() {
  const [fixed, setFixed] = useState("");
  const [price, setPrice] = useState("");
  const [variable, setVariable] = useState("");
  const f = parseFloat(fixed) || 0;
  const p = parseFloat(price) || 0;
  const v = parseFloat(variable) || 0;
  const margin = p - v;
  const units = margin > 0 ? Math.ceil(f / margin) : 0;
  const revenue = units * p;

  return (
    <div className="space-y-4">
      <NumInput label="Monthly fixed costs ₹" value={fixed} onChange={setFixed} />
      <NumInput label="Selling price per unit ₹" value={price} onChange={setPrice} />
      <NumInput label="Variable cost per unit ₹" value={variable} onChange={setVariable} />
      <Result>
        <p className="text-sm text-muted">
          Units to break even: <strong className="text-ink">{units.toLocaleString("en-IN")}</strong>
        </p>
        <p className="mt-1 text-sm text-muted">
          Revenue at break-even: <strong className="text-accent">₹{revenue.toLocaleString("en-IN", { maximumFractionDigits: 0 })}</strong>
        </p>
      </Result>
    </div>
  );
}

export function RoiCalculator() {
  const [gain, setGain] = useState("");
  const [cost, setCost] = useState("");
  const g = parseFloat(gain) || 0;
  const c = parseFloat(cost) || 0;
  const roi = c > 0 ? (((g - c) / c) * 100).toFixed(1) : "—";

  return (
    <div className="space-y-4">
      <NumInput label="Gain / return ₹" value={gain} onChange={setGain} />
      <NumInput label="Investment / cost ₹" value={cost} onChange={setCost} />
      <Result>
        <p className="text-sm text-muted">Return on investment</p>
        <p className="font-display text-3xl font-bold text-accent">{roi}%</p>
      </Result>
    </div>
  );
}

export function GstReverseCalculator() {
  const [total, setTotal] = useState("");
  const [rate, setRate] = useState(18);
  const inclusive = parseFloat(total) || 0;
  const taxable = rate >= 0 ? inclusive / (1 + rate / 100) : 0;
  const gst = inclusive - taxable;

  return (
    <div className="space-y-4">
      <NumInput
        label="Invoice total (incl. GST) ₹"
        value={total}
        onChange={setTotal}
        placeholder="11800"
      />
      <label className="block">
        <span className={labelClass}>GST rate %</span>
        <select
          value={rate}
          onChange={(e) => setRate(Number(e.target.value))}
          className={inputClass}
        >
          {[0, 5, 12, 18, 28].map((r) => (
            <option key={r} value={r}>
              {r}%
            </option>
          ))}
        </select>
      </label>
      <Result>
        <p className="text-sm text-muted">
          Taxable value:{" "}
          <strong className="text-ink">
            ₹{taxable.toLocaleString("en-IN", { maximumFractionDigits: 2 })}
          </strong>
        </p>
        <p className="mt-1 text-sm text-muted">
          GST portion:{" "}
          <strong className="text-ink">
            ₹{gst.toLocaleString("en-IN", { maximumFractionDigits: 2 })}
          </strong>
        </p>
        <p className="mt-1 text-sm text-muted">
          Total check:{" "}
          <strong className="text-accent">
            ₹{inclusive.toLocaleString("en-IN", { maximumFractionDigits: 2 })}
          </strong>
        </p>
      </Result>
    </div>
  );
}

export function AdvanceTaxCalculator() {
  const [profit, setProfit] = useState("");
  const [rate, setRate] = useState(25);
  const [tdsCredit, setTdsCredit] = useState("");
  const taxable = parseFloat(profit) || 0;
  const taxBeforeCredit = (taxable * rate) / 100;
  const credit = parseFloat(tdsCredit) || 0;
  const liability = Math.max(0, taxBeforeCredit - credit);
  const q1 = liability * 0.15;
  const q2 = liability * 0.45;
  const q3 = liability * 0.75;
  const q4 = liability;

  return (
    <div className="space-y-4">
      <NumInput
        label="Est. annual taxable profit ₹"
        value={profit}
        onChange={setProfit}
        placeholder="2000000"
      />
      <label className="block">
        <span className={labelClass}>Effective tax rate %</span>
        <select
          value={rate}
          onChange={(e) => setRate(Number(e.target.value))}
          className={inputClass}
        >
          <option value={25}>25% (company default)</option>
          <option value={22}>22% (115BAB manufacturing)</option>
          <option value={30}>30% (higher slab / surcharge est.)</option>
        </select>
      </label>
      <NumInput
        label="TDS / advance credits ₹"
        value={tdsCredit}
        onChange={setTdsCredit}
        placeholder="0"
      />
      <Result>
        <p className="text-sm text-muted">
          Est. annual tax:{" "}
          <strong className="text-accent">
            ₹{liability.toLocaleString("en-IN", { maximumFractionDigits: 0 })}
          </strong>
        </p>
        <ul className="mt-3 space-y-1.5 text-sm text-muted">
          <li>
            15 Jun (15%): <strong className="text-ink">₹{q1.toLocaleString("en-IN", { maximumFractionDigits: 0 })}</strong>
          </li>
          <li>
            15 Sep (45%): <strong className="text-ink">₹{q2.toLocaleString("en-IN", { maximumFractionDigits: 0 })}</strong>
          </li>
          <li>
            15 Dec (75%): <strong className="text-ink">₹{q3.toLocaleString("en-IN", { maximumFractionDigits: 0 })}</strong>
          </li>
          <li>
            15 Mar (100%): <strong className="text-ink">₹{q4.toLocaleString("en-IN", { maximumFractionDigits: 0 })}</strong>
          </li>
        </ul>
        <p className="mt-3 text-xs text-muted/80">
          Cumulative instalments per Income Tax Act schedule—simplified.
        </p>
      </Result>
    </div>
  );
}

export function PfContributionCalculator() {
  const [basic, setBasic] = useState("");
  const wage = parseFloat(basic) || 0;
  const pfWage = Math.min(wage, 15000);
  const employee = pfWage * 0.12;
  const employer = pfWage * 0.12;
  const total = employee + employer;

  return (
    <div className="space-y-4">
      <NumInput
        label="Monthly basic wages ₹"
        value={basic}
        onChange={setBasic}
        placeholder="25000"
      />
      <Result>
        <p className="text-sm text-muted">
          PF wage base (capped):{" "}
          <strong className="text-ink">
            ₹{pfWage.toLocaleString("en-IN", { maximumFractionDigits: 0 })}
          </strong>
        </p>
        <p className="mt-1 text-sm text-muted">
          Employee (12%):{" "}
          <strong className="text-ink">
            ₹{employee.toLocaleString("en-IN", { maximumFractionDigits: 0 })}
          </strong>
        </p>
        <p className="mt-1 text-sm text-muted">
          Employer (12%):{" "}
          <strong className="text-ink">
            ₹{employer.toLocaleString("en-IN", { maximumFractionDigits: 0 })}
          </strong>
        </p>
        <p className="mt-1 text-sm text-muted">
          Total monthly PF:{" "}
          <strong className="text-accent">
            ₹{total.toLocaleString("en-IN", { maximumFractionDigits: 0 })}
          </strong>
        </p>
        <p className="mt-3 text-xs text-muted/80">
          Standard EPF rates on capped wages; EPS/admin charges excluded.
        </p>
      </Result>
    </div>
  );
}

export function ProfitMarginCalculator() {
  const [revenue, setRevenue] = useState("");
  const [cogs, setCogs] = useState("");
  const [opex, setOpex] = useState("");
  const rev = parseFloat(revenue) || 0;
  const direct = parseFloat(cogs) || 0;
  const operating = parseFloat(opex) || 0;
  const grossProfit = rev - direct;
  const grossPct = rev > 0 ? ((grossProfit / rev) * 100).toFixed(1) : "—";
  const netProfit = grossProfit - operating;
  const netPct = rev > 0 ? ((netProfit / rev) * 100).toFixed(1) : "—";

  return (
    <div className="space-y-4">
      <NumInput label="Revenue ₹" value={revenue} onChange={setRevenue} placeholder="500000" />
      <NumInput label="Direct costs (COGS) ₹" value={cogs} onChange={setCogs} placeholder="200000" />
      <NumInput label="Monthly operating expenses ₹" value={opex} onChange={setOpex} placeholder="150000" />
      <Result>
        <p className="text-sm text-muted">
          Gross margin: <strong className="text-ink">{grossPct}%</strong>
          <span className="text-muted/80">
            {" "}
            (₹{grossProfit.toLocaleString("en-IN", { maximumFractionDigits: 0 })})
          </span>
        </p>
        <p className="mt-1 text-sm text-muted">
          Net margin: <strong className="text-accent">{netPct}%</strong>
          <span className="text-muted/80">
            {" "}
            (₹{netProfit.toLocaleString("en-IN", { maximumFractionDigits: 0 })})
          </span>
        </p>
      </Result>
    </div>
  );
}

export function MrrArrCalculator() {
  const [mrr, setMrr] = useState("");
  const [growth, setGrowth] = useState("");
  const monthly = parseFloat(mrr) || 0;
  const arr = monthly * 12;
  const g = parseFloat(growth) || 0;
  const arr12 = monthly * Math.pow(1 + g / 100, 12) * 12;

  return (
    <div className="space-y-4">
      <NumInput label="Current MRR ₹" value={mrr} onChange={setMrr} placeholder="500000" />
      <NumInput
        label="Monthly MRR growth % (optional)"
        value={growth}
        onChange={setGrowth}
        placeholder="5"
      />
      <Result>
        <p className="text-sm text-muted">Annual recurring revenue (ARR)</p>
        <p className="font-display text-3xl font-bold text-accent">
          ₹{arr.toLocaleString("en-IN", { maximumFractionDigits: 0 })}
        </p>
        {g > 0 && (
          <p className="mt-2 text-sm text-muted">
            ARR in 12 months at {g}% MoM growth (rough):{" "}
            <strong className="text-ink">
              ₹{arr12.toLocaleString("en-IN", { maximumFractionDigits: 0 })}
            </strong>
          </p>
        )}
      </Result>
    </div>
  );
}

export function SafeCapCalculator() {
  const [investment, setInvestment] = useState("");
  const [cap, setCap] = useState("");
  const [roundValuation, setRoundValuation] = useState("");
  const [discount, setDiscount] = useState(20);
  const inv = parseFloat(investment) || 0;
  const capVal = parseFloat(cap) || 0;
  const round = parseFloat(roundValuation) || 0;
  const conversionPrice = capVal > 0 && round > 0 ? Math.min(capVal, round * (1 - discount / 100)) : 0;
  const ownership = conversionPrice > 0 ? (inv / (conversionPrice + inv)) * 100 : 0;
  const postMoney = conversionPrice + inv;

  return (
    <div className="space-y-4">
      <NumInput label="SAFE / note amount ₹" value={investment} onChange={setInvestment} placeholder="3000000" />
      <NumInput label="Valuation cap ₹" value={cap} onChange={setCap} placeholder="15000000" />
      <NumInput
        label="Next round pre-money ₹"
        value={roundValuation}
        onChange={setRoundValuation}
        placeholder="25000000"
      />
      <label className="block">
        <span className={labelClass}>Discount %</span>
        <select
          value={discount}
          onChange={(e) => setDiscount(Number(e.target.value))}
          className={inputClass}
        >
          {[0, 10, 15, 20, 25, 30].map((d) => (
            <option key={d} value={d}>
              {d}%
            </option>
          ))}
        </select>
      </label>
      <Result>
        <p className="text-sm text-muted">
          Effective conversion price:{" "}
          <strong className="text-ink">
            ₹{conversionPrice.toLocaleString("en-IN", { maximumFractionDigits: 0 })}
          </strong>
        </p>
        <p className="mt-1 text-sm text-muted">
          Investor ownership (est.): <strong className="text-accent">{ownership.toFixed(1)}%</strong>
        </p>
        <p className="mt-1 text-xs text-muted/80">
          Post-money for conversion slice: ₹{postMoney.toLocaleString("en-IN", { maximumFractionDigits: 0 })}
        </p>
      </Result>
    </div>
  );
}

export function MsmeUdyamCalculator() {
  const [turnover, setTurnover] = useState("");
  const [investment, setInvestment] = useState("");
  const [sector, setSector] = useState<"manufacturing" | "services">("services");
  const t = parseFloat(turnover) || 0;
  const inv = parseFloat(investment) || 0;

  const limits =
    sector === "manufacturing"
      ? { micro: { t: 2.5, i: 1 }, small: { t: 25, i: 10 }, medium: { t: 250, i: 50 } }
      : { micro: { t: 1, i: 0.1 }, small: { t: 10, i: 1 }, medium: { t: 100, i: 10 } };

  let category: "Micro" | "Small" | "Medium" | "Above MSME" = "Micro";
  if (t > limits.medium.t || inv > limits.medium.i) category = "Above MSME";
  else if (t > limits.small.t || inv > limits.small.i) category = "Medium";
  else if (t > limits.micro.t || inv > limits.micro.i) category = "Small";

  return (
    <div className="space-y-4">
      <label className="block">
        <span className={labelClass}>Sector</span>
        <select
          value={sector}
          onChange={(e) => setSector(e.target.value as "manufacturing" | "services")}
          className={inputClass}
        >
          <option value="services">Services / trading</option>
          <option value="manufacturing">Manufacturing</option>
        </select>
      </label>
      <NumInput
        label="Annual turnover ₹ Cr"
        value={turnover}
        onChange={setTurnover}
        placeholder="0.8"
      />
      <NumInput
        label="Plant & machinery / equipment ₹ Cr"
        value={investment}
        onChange={setInvestment}
        placeholder="0.05"
      />
      <Result>
        <p className="text-sm text-muted">Likely MSME category</p>
        <p className="font-display text-3xl font-bold text-accent">{category}</p>
        <p className="mt-3 text-xs text-muted/80">
          Based on indicative turnover & investment limits (₹ Cr). Register on Udyam for official
          classification.
        </p>
      </Result>
    </div>
  );
}

export function EquityDilutionCalculator() {
  const [founder, setFounder] = useState("100");
  const [raise, setRaise] = useState("");
  const [valuation, setValuation] = useState("");
  const f = parseFloat(founder) || 0;
  const r = parseFloat(raise) || 0;
  const v = parseFloat(valuation) || 0;
  const postMoney = v + r;
  const newInvestor = postMoney > 0 ? (r / postMoney) * 100 : 0;
  const founderAfter = postMoney > 0 ? (f * v) / postMoney : f;

  return (
    <div className="space-y-4">
      <NumInput label="Your current ownership %" value={founder} onChange={setFounder} />
      <NumInput label="Investment amount ₹" value={raise} onChange={setRaise} placeholder="5000000" />
      <NumInput label="Pre-money valuation ₹" value={valuation} onChange={setValuation} placeholder="20000000" />
      <Result>
        <p className="text-sm text-muted">
          New investor stake: <strong className="text-ink">{newInvestor.toFixed(1)}%</strong>
        </p>
        <p className="mt-1 text-sm text-muted">
          Your stake after round: <strong className="text-accent">{founderAfter.toFixed(1)}%</strong>
        </p>
      </Result>
    </div>
  );
}

const calculators: Record<ToolId, () => React.ReactNode> = {
  gst: GstCalculator,
  "gst-reverse": GstReverseCalculator,
  "burn-rate": BurnRateCalculator,
  runway: RunwayCalculator,
  incorporation: IncorporationCostCalculator,
  tds: TdsCalculator,
  "advance-tax": AdvanceTaxCalculator,
  "employee-cost": EmployeeCostCalculator,
  "pf-contribution": PfContributionCalculator,
  "break-even": BreakEvenCalculator,
  "profit-margin": ProfitMarginCalculator,
  roi: RoiCalculator,
  "mrr-arr": MrrArrCalculator,
  "equity-dilution": EquityDilutionCalculator,
  "safe-cap": SafeCapCalculator,
  "msme-udyam": MsmeUdyamCalculator,
};

export function ToolCalculatorPanel({ toolId }: { toolId: ToolId }) {
  const Calc = calculators[toolId];
  if (!Calc) {
    return (
      <p className="rounded-xl border border-dashed border-ink/12 bg-paper-warm p-6 text-sm text-muted">
        Select a tool from the grid to run a calculation.
      </p>
    );
  }
  return <Calc />;
}
