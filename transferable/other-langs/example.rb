numbers = [1, 2, 3, 4, 5]
numbers
    .select{ |value| value % 2 === 0 }
    .map{ |value| value * 2 }