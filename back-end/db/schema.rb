# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2021_06_23_162448) do

  create_table "hours", force: :cascade do |t|
    t.string "day"
    t.time "open_time"
    t.time "close_time"
    t.integer "poi_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.index ["poi_id"], name: "index_hours_on_poi_id"
  end

  create_table "locations", force: :cascade do |t|
    t.string "name"
    t.datetime "start_visit"
    t.datetime "end_visit"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "pois", force: :cascade do |t|
    t.string "name"
    t.string "category"
    t.integer "votes"
    t.integer "location_id", null: false
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.text "notes"
    t.string "street"
    t.string "city"
    t.string "state"
    t.float "zip"
    t.index ["location_id"], name: "index_pois_on_location_id"
  end

  add_foreign_key "hours", "pois"
  add_foreign_key "pois", "locations"
end
