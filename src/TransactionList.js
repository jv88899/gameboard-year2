import React, { useState } from "react";
import Transaction from "./Transaction";

const TransactionList = ({ activeStep, canHighlightCashTransactions }) => {
  const [transactions, setTransactions] = useState([
    {
      stepNumber: `1`,
      transactionNumber: `001`,
      route: `001`,
      description: `Collect $10 from sale to customers for Year 2;
Recognize $10 received in Year 1 for Year 2`,
      activeStep: null,
      previousStep: null,
      visible: true,
      isCashTransaction: false
    },
    {
      stepNumber: `2`,
      transactionNumber: `002`,
      route: `005`,
      description: `Pay $1 of known claims from Year 1 in Year 2`,
      activeStep: null,
      previousStep: null,
      visible: true,
      isCashTransaction: false
    },
    {
      stepNumber: `3`,
      transactionNumber: `003`,
      route: `008`,
      description: `Pay actual claims for $3 received in Year 2 for Year 1 (IBNR estimate); $1 more than expected`,
      activeStep: null,
      previousStep: null,
      visible: true,
      isCashTransaction: false
    },
    {
      stepNumber: `4`,
      transactionNumber: `004`,
      route: `012`,
      description: `Pay $6 of actual prescriptions filled, increase due to new, unexpected specialty drug introduced to the market`,
      activeStep: null,
      previousStep: null,
      visible: true,
      isCashTransaction: false
    },
    {
      stepNumber: `5`,
      transactionNumber: `005`,
      route: `015`,
      description: `Receive claim for $10 of actual medical visits`,
      activeStep: null,
      previousStep: null,
      visible: true,
      isCashTransaction: false
    },
    {
      stepNumber: `6`,
      transactionNumber: `006`,
      route: `017`,
      description: `Estimate claims of $3 not received for Year 2`,
      activeStep: null,
      previousStep: null,
      visible: true,
      isCashTransaction: false
    },
    {
      stepNumber: `7`,
      transactionNumber: `007`,
      route: `019`,
      description: `Sell $6 of investments given the large payable balances`,
      activeStep: null,
      previousStep: null,
      visible: true,
      isCashTransaction: false
    },
    {
      stepNumber: `8`,
      transactionNumber: `008`,
      route: `022`,
      description: `Pay $9 for known medical claims for Year 2`,
      activeStep: null,
      previousStep: null,
      visible: true,
      isCashTransaction: false
    },
    {
      stepNumber: `9`,
      transactionNumber: `009`,
      route: `025`,
      description: `Pay $2 to Medica employees`,
      activeStep: null,
      previousStep: null,
      visible: true,
      isCashTransaction: false
    },
    {
      stepNumber: `10`,
      transactionNumber: `010`,
      route: `028`,
      description: `Take out a loan of $5 from Wells Fargo Bank`,
      activeStep: null,
      previousStep: null,
      visible: true,
      isCashTransaction: false
    },
    {
      stepNumber: `11`,
      transactionNumber: `011`,
      route: `031`,
      description: `Pay $1 to brokers for selling Medica policies for Year 2; Pay $1 broker fees from Year 1`,
      activeStep: null,
      previousStep: null,
      visible: true,
      isCashTransaction: false
    },
    {
      stepNumber: `12`,
      transactionNumber: `012`,
      route: `035`,
      description: `Pay premium taxes of $1 to the North Dakota Department of Revenue`,
      activeStep: null,
      previousStep: null,
      visible: true,
      isCashTransaction: false
    },
    {
      stepNumber: `13`,
      transactionNumber: `013`,
      route: `038`,
      description: `Use 1/5th of the 401 and 301 Carlson Parkway buildings for Year 2`,
      activeStep: null,
      previousStep: null,
      visible: true,
      isCashTransaction: false
    }
  ]);
  const [highlightCashTransactions, setHighlightCashTransactions] = useState(
    false
  );

  return (
    <div className="transaction-list-wrapper">
      <div className="transaction-list">
        <div className="transaction-items-headers">
          <span className="transaction-items-header-description bold center">
            <h3
              onClick={() => {
                if (canHighlightCashTransactions)
                  setHighlightCashTransactions(!highlightCashTransactions);
              }}
            >
              Year 2 Transactions
            </h3>
          </span>
        </div>
        {transactions.map(transaction => (
          <Transaction
            description={transaction.description}
            key={transaction.transactionNumber}
            transactionNumber={transaction.transactionNumber}
            route={transaction.route}
            activeStep={activeStep}
            stepNumber={transaction.stepNumber}
            highlightCashTransactions={highlightCashTransactions}
            isCashTransaction={transaction.isCashTransaction}
          />
        ))}
      </div>
    </div>
  );
};

export default TransactionList;
