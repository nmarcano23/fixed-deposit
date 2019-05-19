class BankSerializer < ActiveModel::Serializer
  attributes :name, :fixed_deposit_plans
  
  def fixed_deposit_plans
    self.object.fixed_deposit_plans.map do |fixed_deposit_plan|
      {
        name: fixed_deposit_plan.name, 
        percentage: fixed_deposit_plan.percentage,
      }
    end 
  end
end
