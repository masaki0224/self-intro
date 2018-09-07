Rails.application.routes.draw do
  root 'introduction#index'
  get 'introduction' => 'introduction#index'
end
