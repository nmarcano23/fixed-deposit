class CreateFixedDepositPlans < ActiveRecord::Migration[5.2]
  def change
    create_table :fixed_deposit_plans do |t|
      t.string :name
      t.integer :percentage
      t.references :bank, foreign_key: true

      t.timestamps
    end
  end
end
