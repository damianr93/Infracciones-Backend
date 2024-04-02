export interface newPago {
  email?: string;
  amount: number;
  fieldPrice: number;
  title: string;
  token?: string;
  paymentMethodId?: string;
  issuerId?: string;
  ownerId: string;
  observations?: string;
  withoutGuarantee?: boolean;
  tenantId?: any | string;
  external_reference?: string;
}
