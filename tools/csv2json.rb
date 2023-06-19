require 'json'

entries = []
data = File.read(ARGV[0])
lines = data.split(/[\r]?\n/)

lines.each do |line|
    fields = line.split(",")
    entry = {
        slot: fields.shift,
        name: fields.shift,
        tags: []
    }
    
    while fields.length > 0 do
        entry.tags.unshift(fields.shift)
    end
    entries.push(entry)
end

puts JSON.pretty_generate(entries)