# == Schema Information
#
# Table name: fixed_deposit_plans
#
#  id         :bigint           not null, primary key
#  name       :string
#  percentage :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  bank_id    :bigint
#
# Indexes
#
#  index_fixed_deposit_plans_on_bank_id  (bank_id)
#
# Foreign Keys
#
#  fk_rails_...  (bank_id => banks.id)
#

class FixedDepositPlan < ApplicationRecord
  belongs_to :bank
end
