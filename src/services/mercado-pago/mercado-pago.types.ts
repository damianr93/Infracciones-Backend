export interface AuthPayment {
  preapproval_id: string;
  id: number;
  type: string;
  status: string;
  date_created: string;
  last_modified: string;
  transaction_amount: number;
  currency_id: string;
  reason: string;
  payment: AuthPaymentObject;
  retry_attempt: number;
  debit_date: string;
  payment_method_id: string;
}

export interface AuthPaymentObject {
  id: number;
  status: string;
  status_detail: string;
}
