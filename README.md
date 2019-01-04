# DB設計

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false|
|name|string|null: false|
|email|string|null: false|

### Association

- has_mamy :groups, through: :members
- has_many :members
- has_many :messages


## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false|
|name|string|null: false|

### assiation

- has_many :users, through: :groups
- has_many :members
- has_many :messages


## membersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|id|integer|null: false|
|body|text| |
|image|string| |
|group_id|integer|null: false|
|user_id|integer|null: false|

### Association

- belongs_to :group
- belongs_to :user

