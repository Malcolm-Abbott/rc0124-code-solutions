select "customers"."firstName",
       "customers"."lastName",
       "payments"."amount" as "amountPaid"
  from "customers"
  join "payments" using ("customerId")
  order by "amountPaid" desc
  limit 10;
