# frozen_string_literal: true

module Types
  class LibraryItemType < Types::BaseObject
    field :id, ID, null: false
    field :title, String, null: false
    field :description, String, null: true
    field :image_url, String, null: true
  end
end
