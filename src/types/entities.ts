interface HistoryItem {
  date: string;
	type: string;
	name: string;
	price: number;
}

interface Limit {
  totalLimit: number;
  limitApprovedOnCreditCard: number;
  additionalLimitToPaySlipsAndPix: number;
}

interface MaximumValueForTransactions {
  creditWithdrawal: number;
  pixOnCredit: number;
  paymentOfBillsOnCredit: number;
}

export interface TemplateData {
  name: string;
	invoiceDate: string;
	emissionAndSending: string;

	previousInvoice: number;
	paymentReceived: number;
	interval: string;
	totalPurchases: number;
	totalPayable: number;
	minPayment: number;
	nextInvoice: string;
	outstandingBalance: number;
	totalOutstandingBalance: number;
	
	history: HistoryItem[];

	limit: Limit;
	maximumValueForTransactions: MaximumValueForTransactions;
}