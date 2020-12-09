// eslint-disable-next-line @typescript-eslint/no-explicit-any
type FIXME = any;

const orderStates = [
    "initial",
    "inWork",
    "buyingSupplies",
    "producing",
    "fullfilled",
] as const;

type OrderState = typeof orderStates[number];
type OrderStateExc = Exclude<OrderState, "buyingSupplies" | "producing">;

// Hint: type guards
export const getUserOrderStates = (orderStates: OrderState[]): OrderStateExc[] =>
    orderStates.filter(
        (state) => state !== "buyingSupplies" && state !== "producing"
    ) as OrderStateExc[];
