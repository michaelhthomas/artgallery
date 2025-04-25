export function formatPhoneNumber(
  areaCode: string,
  phoneNumber: string,
): string {
  return `(${areaCode}) ${phoneNumber.slice(0, 3)}-${phoneNumber.slice(3)}`;
}

export function formatCurrency(amount: number): string {
  return Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
  }).format(amount);
}
