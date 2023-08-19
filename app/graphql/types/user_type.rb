# frozen_string_literal: true

module Types
  class UserType < Types::BaseObject
    field :id, ID, null: false
    field :first_name, String
    field :last_name, String
    field :email, String
    field :full_name, String, null: false

    def full_name
      [object.first_name, object.last_name].compact.join(" ")
    end
  end
end
