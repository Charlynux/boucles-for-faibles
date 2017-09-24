Rx.naturals
|> Rx.take(5)
|> Rx.filter(&Integer.is_even/1)
|> Rx.map(&(2+&1))
|> Rx.to_list