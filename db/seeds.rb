# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)


banks = [
  {
    name: 'Banco Santander Rio',
    plans: [
      {name: 'low', percentage: 3, days: 30},
      {name: 'soft', percentage: 6, days: 60},
      {name: 'high', percentage: 9, days: 90}
    ]
  },
  {
    name: 'Banco Nacion',
    plans: [
      {name: 'low', percentage: 4, days: 30},
      {name: 'soft', percentage: 7, days: 60},
      {name: 'high', percentage: 10, days: 90}
    ]
  },
  {
    name: 'Banco de Galicia',
    plans: [
      {name: 'low', percentage: 13, days: 30},
      {name: 'soft', percentage: 16, days: 60},
      {name: 'high', percentage: 19, days: 90}
    ]
  },
  {
    name: 'BBVA',
    plans: [
      {name: 'low', percentage: 21, days: 30},
      {name: 'soft', percentage: 24, days: 60},
      {name: 'high', percentage: 27, days: 90}
    ]
  },
  {
    name: 'Banco Comafi',
    plans: [
      {name: 'low', percentage: 30, days: 30},
      {name: 'soft', percentage: 33, days: 60},
      {name: 'high', percentage: 36, days: 90}
    ]
  }
]

banks.each do |bank_attributes|
  bank = Bank.find_or_create_by(name: bank_attributes[:name])
  bank_attributes[:plans].each do |plan_attributes|
    bank.fixed_deposit_plans.find_or_create_by(plan_attributes)
  end
end
