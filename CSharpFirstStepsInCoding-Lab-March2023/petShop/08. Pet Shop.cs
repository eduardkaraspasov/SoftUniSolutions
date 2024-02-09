using System;

namespace petShop
{
    internal class Program
    {
        static void Main(string[] args)
        {
            double dogFood = double.Parse(Console.ReadLine());
            double catFood = double.Parse(Console.ReadLine());
            double dogFoodPrice = dogFood * 2.50;
            double catFoodPrice = catFood * 4;

            double finalPrice = dogFoodPrice + catFoodPrice;

            Console.WriteLine($"{finalPrice} lv.");
            


        }
    }
}
