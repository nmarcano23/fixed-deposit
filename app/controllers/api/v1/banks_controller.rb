class Api::V1::BanksController < ApplicationController
  before_action :set_banks, only: [:index]

  def index
    render json: @banks
  end

  private

  def set_banks
    @banks = Bank.all
  end
end
