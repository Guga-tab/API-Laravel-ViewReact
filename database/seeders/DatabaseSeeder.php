<?php

namespace Database\Seeders;

use App\Models\Game;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        //release date -> 'YYYY-MM-DD'
        Game::create([
            'name'=>'Clair Obscur: Expedition 33', 
            'price'=>170.00,
            'rentValue'=>50,
            'plataform'=>'PS5',
            'genre'=>'RPG',
            'releaseDate'=>'2025-04-24', 
            'isRented'=> true
        ]);
    }
}
