class Book < ApplicationRecord
  validates :title, presence: true
  validates :title, :author_name, :genre 
end
