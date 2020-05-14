| Algorithm(s)                                             | Width | Check              | Poly               | Init               | RefIn | RefOut | XorOut             |
| -------------------------------------------------------- | ----- | ------------------ | ------------------ | ------------------ | ----- | ------ | ------------------ |
| CRC-8/AUTOSAR, CRC8\_8H2F                                | 8     | 0xdf               | 0x2f               | 0xff               | false | false  | 0xff               |
| CRC-8/BLUETOOTH                                          | 8     | 0x26               | 0xa7               | 0x0                | true  | true   | 0x0                |
| CRC-8/CDMA2000, CRC8\_CDMA2000                           | 8     | 0xda               | 0x9b               | 0xff               | false | false  | 0x0                |
| CRC-8/DARC, CRC8\_DARC                                   | 8     | 0x15               | 0x39               | 0x0                | true  | true   | 0x0                |
| CRC-8/DVB-S2, CRC8\_DVB\_S2                              | 8     | 0xbc               | 0xd5               | 0x0                | false | false  | 0x0                |
| CRC-8/GSM-A, CRC8\_SAE\_J1850\_ZERO                      | 8     | 0x37               | 0x1d               | 0x0                | false | false  | 0x0                |
| CRC-8/GSM-B                                              | 8     | 0x94               | 0x49               | 0x0                | false | false  | 0xff               |
| CRC-8/I-432-1, CRC8\_ITU, CRC-8/ITU                      | 8     | 0xa1               | 0x7                | 0x0                | false | false  | 0x55               |
| CRC-8/I-CODE, CRC8\_ICODE                                | 8     | 0x7e               | 0x1d               | 0xfd               | false | false  | 0x0                |
| CRC-8/LTE                                                | 8     | 0xea               | 0x9b               | 0x0                | false | false  | 0x0                |
| CRC-8/MAXIM-DOW, CRC8\_MAXIM, CRC-8/MAXIM                | 8     | 0xa1               | 0x31               | 0x0                | true  | true   | 0x0                |
| CRC-8/MIFARE-MAD                                         | 8     | 0x99               | 0x1d               | 0xc7               | false | false  | 0x0                |
| CRC-8/NRSC-5                                             | 8     | 0xf7               | 0x31               | 0xff               | false | false  | 0x0                |
| CRC-8/OPENSAFETY                                         | 8     | 0x3e               | 0x2f               | 0x0                | false | false  | 0x0                |
| CRC-8/ROHC, CRC8\_ROHC                                   | 8     | 0xd0               | 0x7                | 0xff               | true  | true   | 0x0                |
| CRC-8/SAE-J1850, CRC8\_SAE\_J1850                        | 8     | 0x4b               | 0x1d               | 0xff               | false | false  | 0xff               |
| CRC-8/SMBUS, CRC8, CRC-8                                 | 8     | 0xf4               | 0x7                | 0x0                | false | false  | 0x0                |
| CRC-8/TECH-3250, CRC8\_EBU, CRC-8/EBU                    | 8     | 0x97               | 0x1d               | 0xff               | true  | true   | 0x0                |
| CRC-8/WCDMA, CRC8\_WCDMA                                 | 8     | 0x25               | 0x9b               | 0x0                | true  | true   | 0x0                |
| CRC-16/ARC, CRC16\_ARC                                   | 16    | 0xbb3d             | 0x8005             | 0x0                | true  | true   | 0x0                |
| CRC-16/CDMA2000, CRC16\_CDMA2000                         | 16    | 0x4c06             | 0xc867             | 0xffff             | false | false  | 0x0                |
| CRC-16/CMS                                               | 16    | 0xaee7             | 0x8005             | 0xffff             | false | false  | 0x0                |
| CRC-16/DDS-110, CRC16\_DDS\_110                          | 16    | 0x9ecf             | 0x8005             | 0x800d             | false | false  | 0x0                |
| CRC-16/DECT-R, CRC16\_DECT\_R                            | 16    | 0x7e               | 0x589              | 0x0                | false | false  | 0x1                |
| CRC-16/DECT-X, CRC16\_DECT\_X                            | 16    | 0x7f               | 0x589              | 0x0                | false | false  | 0x0                |
| CRC-16/DNP, CRC16\_DNP                                   | 16    | 0xea82             | 0x3d65             | 0x0                | true  | true   | 0xffff             |
| CRC-16/EN-13757, CRC16\_EN\_13757                        | 16    | 0xc2b7             | 0x3d65             | 0x0                | false | false  | 0xffff             |
| CRC-16/GENIBUS, CRC16\_GENIBUS                           | 16    | 0xd64e             | 0x1021             | 0xffff             | false | false  | 0xffff             |
| CRC-16/GSM                                               | 16    | 0xce3c             | 0x1021             | 0x0                | false | false  | 0xffff             |
| CRC-16/IBM-3740, CRC16\_CCITT\_FALSE, CRC-16/CCITT-FALSE | 16    | 0x29b1             | 0x1021             | 0xffff             | false | false  | 0x0                |
| CRC-16/IBM-SDLC, CRC16\_X\_25, CRC-16/X-25               | 16    | 0x906e             | 0x1021             | 0xffff             | true  | true   | 0xffff             |
| CRC-16/ISO-IEC-14443-3-A, CRC16\_A, CRC-A                | 16    | 0xbf05             | 0x1021             | 0xc6c6             | true  | true   | 0x0                |
| CRC-16/KERMIT, CRC16\_KERMIT                             | 16    | 0x2189             | 0x1021             | 0x0                | true  | true   | 0x0                |
| CRC-16/LJ1200                                            | 16    | 0xbdf4             | 0x6f63             | 0x0                | false | false  | 0x0                |
| CRC-16/MAXIM-DOW, CRC16\_MAXIM, CRC-16/MAXIM             | 16    | 0x44c2             | 0x8005             | 0x0                | true  | true   | 0xffff             |
| CRC-16/MCRF4XX, CRC16\_MCRF4XX                           | 16    | 0x6f91             | 0x1021             | 0xffff             | true  | true   | 0x0                |
| CRC-16/MODBUS, CRC16\_MODBUS                             | 16    | 0x4b37             | 0x8005             | 0xffff             | true  | true   | 0x0                |
| CRC-16/NRSC-5                                            | 16    | 0xa066             | 0x80b              | 0xffff             | true  | true   | 0x0                |
| CRC-16/OPENSAFETY-A                                      | 16    | 0x5d38             | 0x5935             | 0x0                | false | false  | 0x0                |
| CRC-16/OPENSAFETY-B                                      | 16    | 0x20fe             | 0x755b             | 0x0                | false | false  | 0x0                |
| CRC-16/PROFIBUS                                          | 16    | 0xa819             | 0x1dcf             | 0xffff             | false | false  | 0xffff             |
| CRC-16/RIELLO, CRC16\_RIELLO                             | 16    | 0x63d0             | 0x1021             | 0xb2aa             | true  | true   | 0x0                |
| CRC-16/SPI-FUJITSU, CRC16\_AUG\_CCITT, CRC-16/AUG-CCITT  | 16    | 0xe5cc             | 0x1021             | 0x1d0f             | false | false  | 0x0                |
| CRC-16/T10-DIF, CRC16\_T10\_DIF                          | 16    | 0xd0db             | 0x8bb7             | 0x0                | false | false  | 0x0                |
| CRC-16/TELEDISK, CRC16\_TELEDISK                         | 16    | 0xfb3              | 0xa097             | 0x0                | false | false  | 0x0                |
| CRC-16/TMS37157, CRC16\_TMS37157                         | 16    | 0x26b1             | 0x1021             | 0x89ec             | true  | true   | 0x0                |
| CRC-16/UMTS, CRC16\_BUYPASS, CRC-16/BUYPASS              | 16    | 0xfee8             | 0x8005             | 0x0                | false | false  | 0x0                |
| CRC-16/USB, CRC16\_USB                                   | 16    | 0xb4c8             | 0x8005             | 0xffff             | true  | true   | 0xffff             |
| CRC-16/XMODEM, CRC16\_CCIT\_ZERO, CRC16\_XMODEM          | 16    | 0x31c3             | 0x1021             | 0x0                | false | false  | 0x0                |
| CRC-32/AIXM, CRC32\_Q, CRC-32Q                           | 32    | 0x3010bf7f         | 0x814141ab         | 0x0                | false | false  | 0x0                |
| CRC-32/AUTOSAR                                           | 32    | 0x1697d06a         | 0xf4acfb13         | 0xffffffff         | true  | true   | 0xffffffff         |
| CRC-32/BASE91-D, CRC32\_D, CRC-32D                       | 32    | 0x87315576         | 0xa833982b         | 0xffffffff         | true  | true   | 0xffffffff         |
| CRC-32/BZIP2, CRC32\_BZIP2                               | 32    | 0xfc891918         | 0x4c11db7          | 0xffffffff         | false | false  | 0xffffffff         |
| CRC-32/CD-ROM-EDC                                        | 32    | 0x6ec2edc4         | 0x8001801b         | 0x0                | true  | true   | 0x0                |
| CRC-32/CKSUM, CRC32\_POSIX, CRC-32/POSIX                 | 32    | 0x765e7680         | 0x4c11db7          | 0x0                | false | false  | 0xffffffff         |
| CRC-32/ISCSI, CRC32\_C, CRC-32C                          | 32    | 0xe3069283         | 0x1edc6f41         | 0xffffffff         | true  | true   | 0xffffffff         |
| CRC-32/ISO-HDLC, CRC32, CRC-32                           | 32    | 0xcbf43926         | 0x4c11db7          | 0xffffffff         | true  | true   | 0xffffffff         |
| CRC-32/JAMCRC, CRC32\_JAMCRC                             | 32    | 0x340bc6d9         | 0x4c11db7          | 0xffffffff         | true  | true   | 0x0                |
| CRC-32/MPEG-2, CRC32\_MPEG2                              | 32    | 0x376e6e7          | 0x4c11db7          | 0xffffffff         | false | false  | 0x0                |
| CRC-32/XFER, CRC32\_XFER                                 | 32    | 0xbd0be338         | 0xaf               | 0x0                | false | false  | 0x0                |
| CRC-64/ECMA-182, CRC64\_ECMA\_182                        | 64    | 0x6c40df5f0b497347 | 0x42f0e1eba9ea3693 | 0x0                | false | false  | 0x0                |
| CRC-64/GO-ISO, CRC64\_GO\_ISO                            | 64    | 0xb90956c775a41001 | 0x1b               | 0xffffffffffffffff | true  | true   | 0xffffffffffffffff |
| CRC-64/WE, CRC64\_WE                                     | 64    | 0x62ec59e3f1a4f00a | 0x42f0e1eba9ea3693 | 0xffffffffffffffff | false | false  | 0xffffffffffffffff |
| CRC-64/XZ, CRC64\_XZ                                     | 64    | 0x995dc9bbdf1939fa | 0x42f0e1eba9ea3693 | 0xffffffffffffffff | true  | true   | 0xffffffffffffffff |