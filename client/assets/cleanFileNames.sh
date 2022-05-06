#!/bin/bash
# execute permissions => chmod +x script.sh

i=0;
delineator=_
for f in *.jpg *.JPG;
do
  dateTaken=$(mdls -n kMDItemContentCreationDate $f);
  dateTaken=$(grep -o '\s[0-9]\+-[0-9]\+-[0-9]\+\s' <<< $dateTaken);
  dateTaken=$(sed 's/-//g' <<< $dateTaken);
  fileName=$i$delineator$dateTaken;
  i=$(($i + 1));
  echo $fileName;
done
