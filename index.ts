#! /usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";

class Player {
  name: string;
  fuel: number = 100;
  constructor(name: string) {
    this.name = name;
  }
  fuelDecrease() {
    let fuel = this.fuel - 25;
    this.fuel = fuel;
  }
  fuelIncrease() {
    this.fuel = 100;
  }
}

class Oppponent {
  name: string;
  fuel: number = 100;
  constructor(name: string) {
    this.name = name;
  }
  fuelDecrease() {
    let fuel = this.fuel - 25;
    this.fuel = fuel;
  }
}

let player = await inquirer.prompt({
  name: "name",
  type: "input",
  message: "Enter Your Name:",
});

let opponent = await inquirer.prompt({
  name: "select",
  type: "list",
  choices: ["Zombie", "Alien", "Vampire", "Skeleton"],
  message: "Choose your opponent",
});

let p1 = new Player(player.name);
let o1 = new Oppponent(opponent.select);

do {
  if (opponent.select === "Zombie") {
    let ask = await inquirer.prompt({
      name: "opt",
      type: "list",
      choices: ["Attack", "Drink portion", "Run for life"],
      message: "Select action",
    });

    if (ask.opt === "Attack") {
      let num = Math.floor(Math.random() * 2);
      if (num > 0) {
        p1.fuelDecrease();
        console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
        console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
        if (p1.fuel <= 0) {
          console.log(
            chalk.red.bold.italic("You loose, Better luck next time")
          );
          process.exit();
        }
      }
      if (num <= 0) {
        o1.fuelDecrease();
        console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
        console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
        if (o1.fuel <= 0) {
          console.log(chalk.green.bold.italic("You win"));
          process.exit();
        }
      }
    }
    if (ask.opt === "Drink portion") {
      p1.fuelIncrease();
      console.log(
        chalk.green.bold.italic(
          `You drink health portion, your fuel is ${p1.fuel}`
        )
      );
    }
    if (ask.opt === "Run for life") {
      console.log(chalk.red.bold.italic("You loose, Better luck next time"));
      process.exit();
    }
  }

  if (opponent.select === "Alien") {
    let ask = await inquirer.prompt({
      name: "opt",
      type: "list",
      choices: ["Attack", "Drink portion", "Run for life"],
      message: "Select action",
    });

    if (ask.opt === "Attack") {
      let num = Math.floor(Math.random() * 2);
      if (num > 0) {
        p1.fuelDecrease();
        console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
        console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
        if (p1.fuel <= 0) {
          console.log(
            chalk.red.bold.italic("You loose, Better luck next time")
          );
          process.exit();
        }
      }
      if (num <= 0) {
        o1.fuelDecrease();
        console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
        console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
        if (o1.fuel <= 0) {
          console.log(chalk.green.bold.italic("You win"));
          process.exit();
        }
      }
    }
    if (ask.opt === "Drink portion") {
      p1.fuelIncrease();
      console.log(
        chalk.green.bold.italic(
          `You drink health portion, your fuel is ${p1.fuel}`
        )
      );
    }
    if (ask.opt === "Run for life") {
      console.log(chalk.red.bold.italic("You loose, Better luck next time"));
      process.exit();
    }
  }

  if (opponent.select === "Vampire") {
    let ask = await inquirer.prompt({
      name: "opt",
      type: "list",
      choices: ["Attack", "Drink portion", "Run for life"],
      message: "Select action",
    });

    if (ask.opt === "Attack") {
      let num = Math.floor(Math.random() * 2);
      if (num > 0) {
        p1.fuelDecrease();
        console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
        console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
        if (p1.fuel <= 0) {
          console.log(
            chalk.red.bold.italic("You loose, Better luck next time")
          );
          process.exit();
        }
      }
      if (num <= 0) {
        o1.fuelDecrease();
        console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
        console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
        if (o1.fuel <= 0) {
          console.log(chalk.green.bold.italic("You win"));
          process.exit();
        }
      }
    }
    if (ask.opt === "Drink portion") {
      p1.fuelIncrease();
      console.log(
        chalk.green.bold.italic(
          `You drink health portion, your fuel is ${p1.fuel}`
        )
      );
    }
    if (ask.opt === "Run for life") {
      console.log(chalk.red.bold.italic("You loose, Better luck next time"));
      process.exit();
    }
  }

  if (opponent.select === "Skeleton") {
    let ask = await inquirer.prompt({
      name: "opt",
      type: "list",
      choices: ["Attack", "Drink portion", "Run for life"],
      message: "Select action",
    });

    if (ask.opt === "Attack") {
      let num = Math.floor(Math.random() * 2);
      if (num > 0) {
        p1.fuelDecrease();
        console.log(chalk.bold.red(`${p1.name} fuel is ${p1.fuel}`));
        console.log(chalk.bold.green(`${o1.name} fuel is ${o1.fuel}`));
        if (p1.fuel <= 0) {
          console.log(
            chalk.red.bold.italic("You loose, Better luck next time")
          );
          process.exit();
        }
      }
      if (num <= 0) {
        o1.fuelDecrease();
        console.log(chalk.bold.green(`${p1.name} fuel is ${p1.fuel}`));
        console.log(chalk.bold.red(`${o1.name} fuel is ${o1.fuel}`));
        if (o1.fuel <= 0) {
          console.log(chalk.green.bold.italic("You win"));
          process.exit();
        }
      }
    }
    if (ask.opt === "Drink portion") {
      p1.fuelIncrease();
      console.log(
        chalk.green.bold.italic(
          `You drink health portion, your fuel is ${p1.fuel}`
        )
      );
    }
    if (ask.opt === "Run for life") {
      console.log(chalk.red.bold.italic("You loose, Better luck next time"));
      process.exit();
    }
  }

} while (true);
