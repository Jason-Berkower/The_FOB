class RemoveCommentColumnFromPosts < ActiveRecord::Migration[6.1]
  def change
    remove_column :posts, :comments_id
  end
end
