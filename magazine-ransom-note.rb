m,n = gets.strip.split(' ')
m = m.to_i
n = n.to_i
magazine = gets.strip
magazine = magazine.split(' ')
ransom = gets.strip
ransom = ransom.split(' ')

if m < n
  print "No"
else
  ransom.each do |word|
    if magazine.include?(word)
      index = magazine.index(word)
      magazine.delete_at(index)
    else
      print "No"
      return
    end
  end
  print "Yes"
end
