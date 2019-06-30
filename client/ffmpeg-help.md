ffmpeg version 3.2.14-1~deb9u1 Copyright (c) 2000-2019 the FFmpeg developers

  built with gcc 6.3.0 (Debian 6.3.0-18+deb9u1) 20170516

  configuration: --prefix=/usr --extra-version='1~deb9u1' --toolchain=hardened --libdir=/usr/lib/x86_64-linux-gnu --incdir=/usr/include/x86_64-linux-gnu --enable-gpl --disable-stripping --enable-avresample --enable-avisynth --enable-gnutls --enable-ladspa --enable-libass --enable-libbluray --enable-libbs2b --enable-libcaca --enable-libcdio --enable-libebur128 --enable-libflite --enable-libfontconfig --enable-libfreetype --enable-libfribidi --enable-libgme --enable-libgsm --enable-libmp3lame --enable-libopenjpeg --enable-libopenmpt --enable-libopus --enable-libpulse --enable-librubberband --enable-libshine --enable-libsnappy --enable-libsoxr --enable-libspeex --enable-libssh --enable-libtheora --enable-libtwolame --enable-libvorbis --enable-libvpx --enable-libwavpack --enable-libwebp --enable-libx265 --enable-libxvid --enable-libzmq --enable-libzvbi --enable-omx --enable-openal --enable-opengl --enable-sdl2 --enable-libdc1394 --enable-libiec61883 --enable-chromaprint --enable-frei0r --enable-libopencv --enable-libx264 --enable-shared

  libavutil      55. 34.101 / 55. 34.101

  libavcodec     57. 64.101 / 57. 64.101

  libavformat    57. 56.101 / 57. 56.101

  libavdevice    57.  1.100 / 57.  1.100

  libavfilter     6. 65.100 /  6. 65.100

  libavresample   3.  1.  0 /  3.  1.  0

  libswscale      4.  2.100 /  4.  2.100

  libswresample   2.  3.100 /  2.  3.100

  libpostproc    54.  1.100 / 54.  1.100

Hyper fast Audio and Video encoder

usage: ffmpeg [options] [[infile options] -i infile]... {[outfile options] outfile}...




Getting help:

    -h      -- print basic options

    -h long -- print more options

    -h full -- print all options (including all format and codec specific options, very long)

    -h type=name -- print all options for the named decoder/encoder/demuxer/muxer/filter

    See man ffmpeg for detailed description of the options.




Print help / information / capabilities:

-L                  show license

-h topic            show help

-? topic            show help

-help topic         show help

--help topic        show help

-version            show version

-buildconf          show build configuration

-formats            show available formats

-devices            show available devices

-codecs             show available codecs

-decoders           show available decoders

-encoders           show available encoders

-bsfs               show available bit stream filters

-protocols          show available protocols

-filters            show available filters

-pix_fmts           show available pixel formats

-layouts            show standard channel layouts

-sample_fmts        show available audio sample formats

-colors             show available color names

-sources device     list sources of the input device

-sinks device       list sinks of the output device

-hwaccels           show available HW acceleration methods




Global options (affect whole program instead of just one file:

-loglevel loglevel  set logging level

-v loglevel         set logging level

-report             generate a report

-max_alloc bytes    set maximum size of a single allocated block

-y                  overwrite output files

-n                  never overwrite output files

-ignore_unknown     Ignore unknown stream types

-stats              print progress report during encoding

-max_error_rate ratio of errors (0.0: no errors, 1.0: 100% error  maximum error rate

-bits_per_raw_sample number  set the number of bits per raw sample

-vol volume         change audio volume (256=normal)




Per-file main options:

-f fmt              force format

-c codec            codec name

-codec codec        codec name

-pre preset         preset name

-map_metadata outfile[,metadata]:infile[,metadata]  set metadata information of outfile from infile

-t duration         record or transcode "duration" seconds of audio/video

-to time_stop       record or transcode stop time

-fs limit_size      set the limit file size in bytes

-ss time_off        set the start time offset

-sseof time_off     set the start time offset relative to EOF

-seek_timestamp     enable/disable seeking by timestamp with -ss

-timestamp time     set the recording timestamp ('now' to set the current time)

-metadata string=string  add metadata

-program title=string:st=number...  add program with specified streams

-target type        specify target file type ("vcd", "svcd", "dvd", "dv" or "dv50" with optional prefixes "pal-", "ntsc-" or "film-")

-apad               audio pad

-frames number      set the number of frames to output

-filter filter_graph  set stream filtergraph

-filter_script filename  read stream filtergraph description from a file

-reinit_filter      reinit filtergraph on input parameter changes

-discard            discard

-disposition        disposition




Video options:

-vframes number     set the number of video frames to output

-r rate             set frame rate (Hz value, fraction or abbreviation)

-s size             set frame size (WxH or abbreviation)

-aspect aspect      set aspect ratio (4:3, 16:9 or 1.3333, 1.7777)

-bits_per_raw_sample number  set the number of bits per raw sample

-vn                 disable video

-vcodec codec       force video codec ('copy' to copy stream)

-timecode hh:mm:ss[:;.]ff  set initial TimeCode value.

-pass n             select the pass number (1 to 3)

-vf filter_graph    set video filters

-ab bitrate         audio bitrate (please use -b:a)

-b bitrate          video bitrate (please use -b:v)

-dn                 disable data




Audio options:

-aframes number     set the number of audio frames to output

-aq quality         set audio quality (codec-specific)

-ar rate            set audio sampling rate (in Hz)

-ac channels        set number of audio channels

-an                 disable audio

-acodec codec       force audio codec ('copy' to copy stream)

-vol volume         change audio volume (256=normal)

-af filter_graph    set audio filters




Subtitle options:

-s size             set frame size (WxH or abbreviation)

-sn                 disable subtitle

-scodec codec       force subtitle codec ('copy' to copy stream)

-stag fourcc/tag    force subtitle tag/fourcc

-fix_sub_duration   fix subtitles duration

-canvas_size size   set canvas size (WxH or abbreviation)

-spre preset        set the subtitle options to the indicated preset