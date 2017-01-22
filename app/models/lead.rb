class Lead < ApplicationRecord

  validates :email, uniqueness: true
  validates :first_name, presence: true, length: {maximum: 255}
  validates :last_name, presence: true, length: {maximum: 255}
  # Capturar direto o IP pelo back-end
  #validates :ip, presence: true, length: {maximum: 255}

end
