class Group < ApplicationRecord
  has_many :members
  has_many :users, through: :members

  validate :name, presence: true
end
