# == Schema Information
#
# Table name: banks
#
#  id         :bigint           not null, primary key
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class BankSerializer < ActiveModel::Serializer
  attributes :id, :name, :fixed_deposit_plans
  
  def fixed_deposit_plans
    self.object.fixed_deposit_plans.map do |fixed_deposit_plan|
      {
        id: fixed_deposit_plan.id, 
        name: fixed_deposit_plan.name, 
        days: fixed_deposit_plan.days, 
        percentage: fixed_deposit_plan.percentage,
      }
    end 
  end
end
