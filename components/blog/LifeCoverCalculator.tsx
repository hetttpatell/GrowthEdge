"use client";

import { useState, useMemo } from "react";

function formatLakhs(value: number): string {
  if (value >= 100) {
    const crore = value / 100;
    return crore % 1 === 0
      ? `₹${crore.toFixed(0)} Cr`
      : `₹${crore.toFixed(2)} Cr`;
  }
  return `₹${value.toFixed(value % 1 === 0 ? 0 : 1)} L`;
}

function InputField({
  label,
  sublabel,
  value,
  onChange,
  suffix,
  min = 0,
  max,
  step = 1,
}: {
  label: string;
  sublabel?: string;
  value: number;
  onChange: (v: number) => void;
  suffix?: string;
  min?: number;
  max?: number;
  step?: number;
}) {
  return (
    <div className="space-y-1.5">
      <label className="block font-body text-sm font-medium text-stone-700">
        {label}
        {sublabel && (
          <span className="font-normal text-muted text-xs ml-1.5">
            {sublabel}
          </span>
        )}
      </label>
      <div className="relative">
        <input
          type="number"
          inputMode="decimal"
          min={min}
          max={max}
          step={step}
          value={value || ""}
          onChange={(e) => onChange(Number(e.target.value) || 0)}
          placeholder="0"
          className="w-full rounded-lg border border-edge bg-cream/60 px-3.5 py-2.5 text-sm font-body text-charcoal placeholder:text-muted-light focus:outline-none focus:ring-2 focus:ring-olive/30 focus:border-olive transition-all [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
        />
        {suffix && (
          <span className="absolute right-3.5 top-1/2 -translate-y-1/2 text-xs font-body text-muted pointer-events-none">
            {suffix}
          </span>
        )}
      </div>
    </div>
  );
}

function ResultBar({
  label,
  value,
  percentage,
  color,
}: {
  label: string;
  value: number;
  percentage: number;
  color: string;
}) {
  if (value <= 0) return null;
  return (
    <div className="space-y-1">
      <div className="flex items-center justify-between text-xs font-body">
        <span className="text-stone-600">{label}</span>
        <span className="font-medium text-stone-800">{formatLakhs(value)}</span>
      </div>
      <div className="h-2 rounded-full bg-edge/60 overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-500 ease-out"
          style={{
            width: `${Math.max(percentage, 2)}%`,
            backgroundColor: color,
          }}
        />
      </div>
    </div>
  );
}

export default function LifeCoverCalculator() {
  const [annualIncome, setAnnualIncome] = useState(0);
  const [yearsToSupport, setYearsToSupport] = useState(20);
  const [homeLoan, setHomeLoan] = useState(0);
  const [carLoan, setCarLoan] = useState(0);
  const [personalLoans, setPersonalLoans] = useState(0);
  const [educationCost, setEducationCost] = useState(0);
  const [existingCover, setExistingCover] = useState(0);

  const result = useMemo(() => {
    const incomeReplacement = annualIncome * yearsToSupport;
    const totalDebts = homeLoan + carLoan + personalLoans;
    const education = educationCost;
    const gross = incomeReplacement + totalDebts + education;
    const net = Math.max(gross - existingCover, 0);

    return {
      incomeReplacement,
      totalDebts,
      education,
      gross,
      net,
    };
  }, [
    annualIncome,
    yearsToSupport,
    homeLoan,
    carLoan,
    personalLoans,
    educationCost,
    existingCover,
  ]);

  const hasInput = annualIncome > 0 || homeLoan > 0 || carLoan > 0 || personalLoans > 0 || educationCost > 0;

  const quickMultiple = annualIncome > 0 ? Math.round(result.net / annualIncome) : 0;

  return (
    <div className="my-8 rounded-2xl border border-edge bg-white overflow-hidden shadow-sm">
      {/* Header */}
      <div className="bg-charcoal px-5 sm:px-6 py-4 sm:py-5">
        <h3 className="font-heading text-base sm:text-lg mb-0.5 leading-snug" style={{ color: '#FFFFFF' }}>
          Life Cover Calculator
        </h3>
        <p className="font-body text-xs sm:text-sm mb-0 leading-relaxed" style={{ color: 'rgba(255,255,255,0.6)' }}>
          Use the D.I.M.E. method to find your ideal coverage amount
        </p>
      </div>

      <div className="p-5 sm:p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Left: Inputs */}
          <div className="space-y-5">
            {/* Income section */}
            <div>
              <div className="flex items-center gap-1.5 mb-3">
                <span className="inline-flex items-center justify-center w-5 h-5 rounded bg-olive/10 text-olive text-[10px] font-bold font-body shrink-0">
                  I
                </span>
                <span className="font-body text-xs font-semibold text-stone-500 uppercase tracking-wider">
                  Income Replacement
                </span>
              </div>
              <div className="grid grid-cols-2 gap-3">
                <InputField
                  label="Annual Income"
                  value={annualIncome}
                  onChange={setAnnualIncome}
                  suffix="₹ Lakhs"
                  step={1}
                />
                <InputField
                  label="Years to Support"
                  value={yearsToSupport}
                  onChange={setYearsToSupport}
                  suffix="years"
                  min={1}
                  max={40}
                />
              </div>
            </div>

            {/* Debts section */}
            <div>
              <div className="flex items-center gap-1.5 mb-3">
                <span className="inline-flex items-center justify-center w-5 h-5 rounded bg-olive/10 text-olive text-[10px] font-bold font-body shrink-0">
                  D
                </span>
                <span className="font-body text-xs font-semibold text-stone-500 uppercase tracking-wider">
                  Debts & Mortgage
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                <InputField
                  label="Home Loan"
                  value={homeLoan}
                  onChange={setHomeLoan}
                  suffix="₹ Lakhs"
                />
                <InputField
                  label="Car Loan"
                  value={carLoan}
                  onChange={setCarLoan}
                  suffix="₹ Lakhs"
                />
                <InputField
                  label="Other Loans"
                  value={personalLoans}
                  onChange={setPersonalLoans}
                  suffix="₹ Lakhs"
                />
              </div>
            </div>

            {/* Education section */}
            <div>
              <div className="flex items-center gap-1.5 mb-3">
                <span className="inline-flex items-center justify-center w-5 h-5 rounded bg-olive/10 text-olive text-[10px] font-bold font-body shrink-0">
                  E
                </span>
                <span className="font-body text-xs font-semibold text-stone-500 uppercase tracking-wider">
                  Children&apos;s Education
                </span>
              </div>
              <InputField
                label="Total Education Fund"
                sublabel="(all children combined)"
                value={educationCost}
                onChange={setEducationCost}
                suffix="₹ Lakhs"
              />
            </div>

            {/* Existing cover */}
            <div className="pt-2 border-t border-edge/60">
              <InputField
                label="Existing Life Cover"
                sublabel="(if any current policy)"
                value={existingCover}
                onChange={setExistingCover}
                suffix="₹ Lakhs"
              />
            </div>
          </div>

          {/* Right: Results */}
          <div>
            {/* Big number */}
            <div className="bg-cream/80 rounded-xl p-5 mb-5 text-center border border-edge/40">
              <p className="font-body text-xs text-muted uppercase tracking-wider mb-1">
                Recommended Life Cover
              </p>
              <p className="font-heading text-3xl sm:text-4xl text-charcoal mb-1 tabular-nums">
                {hasInput ? formatLakhs(result.net) : "—"}
              </p>
              {hasInput && annualIncome > 0 && (
                <p className="font-body text-xs text-muted">
                  ≈ {quickMultiple}× your annual income
                </p>
              )}
            </div>

            {/* Breakdown bars */}
            {hasInput ? (
              <div className="space-y-3.5">
                <p className="font-body text-xs font-semibold text-stone-500 uppercase tracking-wider">
                  Breakdown
                </p>
                <ResultBar
                  label="Income Replacement"
                  value={result.incomeReplacement}
                  percentage={
                    result.gross > 0
                      ? (result.incomeReplacement / result.gross) * 100
                      : 0
                  }
                  color="#4A5D4A"
                />
                <ResultBar
                  label="Debts & Mortgage"
                  value={result.totalDebts}
                  percentage={
                    result.gross > 0
                      ? (result.totalDebts / result.gross) * 100
                      : 0
                  }
                  color="#6B8E6B"
                />
                <ResultBar
                  label="Education Fund"
                  value={result.education}
                  percentage={
                    result.gross > 0
                      ? (result.education / result.gross) * 100
                      : 0
                  }
                  color="#8FAE8F"
                />
                {existingCover > 0 && (
                  <ResultBar
                    label="Less: Existing Cover"
                    value={existingCover}
                    percentage={
                      result.gross > 0
                        ? (existingCover / result.gross) * 100
                        : 0
                    }
                    color="#999999"
                  />
                )}

                {/* Summary line */}
                <div className="mt-4 pt-3.5 border-t border-edge/60 flex items-center justify-between">
                  <span className="font-body text-sm text-stone-600">
                    Total needed
                  </span>
                  <span className="font-body text-sm font-semibold text-charcoal">
                    {formatLakhs(result.gross)}
                  </span>
                </div>
                {existingCover > 0 && (
                  <div className="flex items-center justify-between">
                    <span className="font-body text-sm text-stone-600">
                      Gap to fill
                    </span>
                    <span className="font-body text-sm font-bold text-olive">
                      {formatLakhs(result.net)}
                    </span>
                  </div>
                )}

                {/* Insight */}
                {annualIncome > 0 && (
                  <div className="mt-3 p-3 rounded-lg bg-olive/5 border border-olive/10">
                    <p className="font-body text-xs text-stone-600 leading-relaxed mb-0">
                      {quickMultiple < 10 ? (
                        <>
                          Your coverage need is <strong>{quickMultiple}× income</strong>, which is below the recommended 10-15×. Consider if you&apos;ve accounted for all future expenses.
                        </>
                      ) : quickMultiple <= 15 ? (
                        <>
                          At <strong>{quickMultiple}× income</strong>, your coverage falls within the ideal 10-15× range recommended by financial advisors.
                        </>
                      ) : quickMultiple <= 25 ? (
                        <>
                          Your need of <strong>{quickMultiple}× income</strong> is above the standard 10-15× rule, likely due to significant debts or education goals. A base term plan + super top-up can be cost-effective.
                        </>
                      ) : (
                        <>
                          At <strong>{quickMultiple}× income</strong>, you may want to split this across 2 term plans from different insurers for risk diversification.
                        </>
                      )}
                    </p>
                  </div>
                )}
              </div>
            ) : (
              <div className="text-center py-6">
                <p className="font-body text-sm text-muted leading-relaxed mb-0">
                  Enter your details on the left to see how much life cover your family needs.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Footnote */}
        <p className="mt-5 pt-4 border-t border-edge/40 font-body text-[11px] text-muted-light leading-relaxed mb-0">
          This calculator provides an estimate based on the D.I.M.E. method. Actual requirements may vary based on inflation, lifestyle, and investment returns. All values in Indian Rupees (Lakhs). Consult a financial advisor for personalised guidance.
        </p>
      </div>
    </div>
  );
}
