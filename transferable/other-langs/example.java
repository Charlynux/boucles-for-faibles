// Source : https://www.mkyong.com/java8/java-8-streams-filter-examples/

List<Person> persons = Arrays.asList(
        new Person("mkyong", 30),
        new Person("jack", 20),
        new Person("lawrence", 40)
);

String name = persons.stream()
        .filter(x -> "jack".equals(x.getName()))
        .map(Person::getName)
        .collect(Collectors.toList());