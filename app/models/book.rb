class Book < ApplicationRecord
  validates :title, :author_name, :genre, presence: true
end
