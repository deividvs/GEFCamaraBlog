class CreateLeads < ActiveRecord::Migration[5.0]
  def change
    create_table :leads do |t|
      t.string :email
      t.string :first_name
      t.string :last_name
      t.string :ip

      t.timestamps
    end
  end
end
