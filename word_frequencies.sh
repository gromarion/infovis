function lowercase {
  tr '[:upper:]' '[:lower:]'
}

function remove_special_characters {
  tr -d '.' |
  tr -d ',' |
  tr -d '(' |
  tr -d ')' |
  tr -d '[' |
  tr -d ']' |
  tr -d '-' |
  tr -d ':'
}

function remove_stop_words {
  sed 's/\of //g' |
  sed 's/\at //g' |
  sed 's/\the //g' |
  sed 's/\from //g' |
  sed 's/\in //g' |
  sed 's/\is //g' |
  sed 's/\for //g' |
  sed 's/\or //g' |
  sed 's/\and //g' |
  sed 's/\it //g' |
  sed 's/\to //g' |
  sed 's/\a //g' |
  sed 's/\are //g' |
  sed 's/\as //g' |
  sed 's/\an //g' |
  sed 's/\not //g' |
  sed 's/\can //g' |
  sed 's/\be //g' |
  sed 's/\use //g' |
  sed 's/\has //g' |
  sed 's/\which //g' |
  sed 's/\such //g' |
  sed 's/\on //g' |
  sed 's/\eg //g'
}

cat $1 |
  lowercase |
  remove_special_characters |
  remove_stop_words |
  tr ' ' '\n' |
  grep -v "^\s*$" |
  sort |
  uniq -c |
  sort -bnr
