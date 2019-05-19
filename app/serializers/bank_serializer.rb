class BankSerializer < ActiveModel::Serializer
  attributes :id, :name, :fixed_deposit_plans
  
  def fixed_deposit_plans
    self.object.fixed_deposit_plans.map do |fixed_deposit_plan|
      {
        id: fixed_deposit_plan.id, 
        name: fixed_deposit_plan.name, 
        percentage: fixed_deposit_plan.percentage,
      }
    end 
  end
end
