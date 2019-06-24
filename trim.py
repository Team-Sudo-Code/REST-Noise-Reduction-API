from pydub import AudioSegment
import glob
import os
import sys
files = glob.glob(str(sys.argv[0])/*.wav*")
for file in files:
    newAudio = AudioSegment.from_wav(file)[0:10000]  # milliseconds
    # exports to a .wav file to a different path
    newAudio.export(file.rsplit('\\', 1)[0]+"/new/"+file.rsplit('\\', 1)[1], format="wav")
