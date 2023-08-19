# frozen_string_literal

Rails.application.routes.draw do
  root 'library#index'

  post "/graphql", to: "graphql#execute"
  mount GraphiQL::Rails::Engine, at: "/graphiql", graphql_path: "/graphql" if Rails.env.development?
end
