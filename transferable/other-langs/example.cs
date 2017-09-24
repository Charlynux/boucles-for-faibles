var numbers = new List<Int32>(){ 1, 2, 3, 4, 5, 6};

numbers
    .Where(x => x % 2 == 0)
    .Select(x => x * 5)
    .ToList();