# == Schema Information
#
# Table name: banks
#
#  id         :bigint           not null, primary key
#  name       :string
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Bank < ApplicationRecord
  has_many :fixed_deposit_plans
  accepts_nested_attributes_for :fixed_deposit_plans
end
