class AddDaysToFixedDepositPlan < ActiveRecord::Migration[5.2]
  def change
    add_column :fixed_deposit_plans, :days, :integer
  end
end
