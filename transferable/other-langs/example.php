<?php
// Cake PHP !!!

$numbers = collection([1, 2, 3, 4, 5, 6])
            ->filter(function ($num) {
                return $num % 2 === 0;
            })
            ->map(function ($num) {
                return $num * 5;
            })
            ->toArray();
