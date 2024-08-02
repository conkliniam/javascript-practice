const numTeams = (function () {
  const method = function (rating) {
    let count = 0;

    for (let j = 1; j < rating.length - 1; j++) {
      let increaseLeft = 0;
      let decreaseLeft = 0;
      for (let i = j - 1; i >= 0; i--) {
        if (rating[i] < rating[j]) {
          decreaseLeft += 1;
        } else {
          increaseLeft += 1;
        }
      }

      let increaseRight = 0;
      let decreaseRight = 0;
      for (let k = j + 1; k < rating.length; k++) {
        if (rating[j] < rating[k]) {
          increaseRight += 1;
        } else {
          decreaseRight += 1;
        }
      }

      count += decreaseLeft * increaseRight + increaseLeft * decreaseRight;
    }

    return count;
  };

  const tests = [
    {
      input: [
        996, 63, 62, 61, 60, 59, 58, 57, 56, 68, 77, 86, 50, 95, 104, 113, 122,
        131, 140, 149, 158, 41, 167, 176, 185, 194, 203, 212, 221, 230, 115,
        239, 248, 257, 266, 275, 284, 293, 302, 99, 311, 320, 329, 338, 347,
        356, 365, 374, 187, 383, 392, 401, 410, 419, 428, 437, 446, 5, 455, 464,
        473, 482, 491, 500, 509, 518, 259, 527, 536, 545, 554, 563, 572, 581,
        590, 74, 599, 608, 617, 626, 635, 644, 653, 662, 331, 671, 680, 689,
        698, 707, 716, 725, 734, 243, 743, 752, 761, 770, 779, 788, 797, 806,
        403, 815, 824, 833, 842, 851, 860, 869, 878, 46, 887, 896, 905, 914,
        923, 932, 941, 950, 475, 959, 968, 977, 986, 995, 502, 333, 511, 70,
        520, 165, 208, 260, 529, 109, 538, 360, 547, 130, 556, 369, 565, 226,
        574, 183, 583, 387, 592, 141, 396, 296, 601, 164, 610, 305, 619, 414,
        628, 201, 637, 423, 646, 55, 655, 39, 664, 159, 441, 332, 673, 450, 682,
        341, 691, 166, 700, 468, 709, 101, 718, 477, 727, 37, 736, 237, 146,
        368, 745, 75, 754, 504, 763, 307, 772, 513, 781, 156, 790, 255, 799,
        531, 808, 195, 540, 404, 817, 110, 826, 413, 835, 558, 844, 273, 853,
        567, 862, 161, 871, 72, 880, 213, 585, 440, 889, 594, 898, 449, 907,
        220, 916, 612, 925, 370, 934, 621, 943, 124, 952, 309, 263, 476, 961,
        26, 970, 648, 979, 238, 988, 657, 997, 123, 666, 327, 503, 675, 406,
        249, 684, 512, 336, 415, 693, 521, 290, 702, 258, 424, 530, 711, 217,
        163, 720, 142, 354, 267, 729, 548, 442, 738, 15, 557, 747, 451, 276,
        756, 566, 317, 372, 765, 575, 151, 774, 381, 64, 584, 783, 100, 119,
        792, 390, 478, 294, 801, 602, 209, 810, 399, 611, 819, 301, 344, 828,
        620, 408, 253, 837, 629, 108, 846, 312, 417, 638, 855, 22, 114, 864,
        362, 523, 321, 873, 656, 202, 882, 13, 665, 891, 328, 330, 900, 674,
        236, 444, 909, 683, 17, 918, 453, 310, 692, 927, 559, 69, 936, 462, 346,
        348, 945, 710, 291, 954, 471, 719, 963, 355, 357, 972, 728, 586, 120,
        981, 737, 126, 990, 416, 999, 746, 229, 14, 51, 755, 196, 498, 375, 98,
        764, 1, 9, 79, 773, 434, 622, 384, 134, 782, 118, 631, 90, 791, 205,
        391, 525, 640, 800, 281, 452, 3, 809, 534, 400, 402, 366, 818, 658, 227,
        543, 827, 214, 667, 411, 373, 836, 552, 18, 173, 845, 7, 418, 420, 561,
        854, 299, 8, 323, 863, 223, 694, 488, 261, 872, 191, 703, 94, 881, 232,
        497, 438, 712, 890, 274, 588, 271, 899, 506, 445, 597, 103, 908, 730,
        254, 38, 917, 606, 739, 456, 319, 926, 326, 524, 615, 935, 116, 463,
        465, 11, 944, 624, 97, 53, 953, 241, 766, 474, 633, 962, 244, 775, 175,
        971, 162, 642, 483, 784, 980, 117, 397, 298, 989, 250, 490, 998, 4, 154,
        802, 660, 377, 199, 125, 811, 669, 67, 316, 157, 121, 177, 820, 678,
        508, 510, 91, 829, 426, 171, 687, 587, 268, 838, 519, 292, 135, 696,
        847, 218, 351, 180, 526, 528, 856, 148, 605, 433, 184, 865, 277, 714,
        537, 436, 614, 874, 211, 19, 723, 24, 883, 546, 623, 479, 107, 732, 334,
        892, 286, 553, 741, 499, 901, 80, 144, 28, 278, 750, 910, 564, 65, 288,
        234, 919, 759, 378, 650, 571, 573, 928, 361, 768, 469, 352, 937, 304,
        580, 582, 777, 447, 946, 668, 181, 235, 93, 955, 591, 240, 153, 677,
        231, 31, 964, 33, 598, 600, 345, 973, 160, 804, 172, 405, 152, 982, 813,
        695, 533, 382, 991, 92, 88, 822, 1000, 704, 555, 429, 516, 505, 831,
        150, 127, 713, 627, 562, 481, 840, 49, 71, 314, 722, 634, 636, 849, 242,
        47, 42, 485, 731, 216, 858, 645, 287, 54, 461, 740, 200, 867, 76, 652,
        654, 143, 501, 749, 876, 30, 262, 340, 661, 885, 85, 758, 206, 541, 133,
        34, 894, 670, 672, 767, 36, 371, 78, 903, 52, 349, 679, 776, 492, 435,
        912, 265, 23, 459, 73, 785, 690, 921, 219, 145, 170, 256, 168, 794, 930,
        699, 625, 535, 325, 398, 66, 939, 111, 706, 708, 322, 174, 138, 948,
        539, 228, 367, 715, 957, 83, 363, 821, 155, 247, 359, 966, 724, 726,
        210, 830, 454, 179, 975, 486, 87, 733, 735, 839, 189, 984, 285, 25, 993,
        252, 742, 848, 578, 431, 139, 604, 27, 44, 188, 857, 753, 280, 480, 472,
        613, 215, 246, 866, 760, 762, 681, 35, 388, 507, 283, 875, 10, 769, 771,
        688, 589, 551, 884, 112, 386, 394, 778, 780, 358, 192, 893, 443, 593,
        522, 197, 787, 789, 350, 902, 207, 12, 335, 395, 270, 796, 798, 911,
        609, 569, 649, 487, 193, 412, 805, 920, 84, 313, 251, 147, 21, 264, 129,
        929, 816, 632, 379, 393, 96, 496, 549, 938, 823, 825, 409, 102, 517,
        470, 45, 947, 279, 832, 834, 744, 295, 596, 956, 353, 204, 430, 841,
        843, 751, 643, 965, 685, 514, 422, 20, 850, 852, 385, 974, 82, 6, 647,
        343, 439, 859, 861, 983, 532, 337, 380, 992, 576, 448, 868, 870, 2, 663,
        544, 579, 182, 282, 105, 877, 879, 651, 225, 132, 339, 169, 245, 297,
        886, 888, 198, 40, 427, 721, 303, 136, 224, 895, 897, 577, 570, 641,
        178, 137, 603, 457, 904, 906, 807, 618, 460, 515, 550, 222, 306, 913,
        915, 814, 697, 342, 269, 389, 458, 466, 922, 924, 421, 803, 659, 748,
        701, 300, 233, 931, 933, 106, 812, 364, 757, 568, 467, 190, 940, 942,
        676, 717, 786, 315, 289, 630, 484, 949, 951, 705, 376, 795, 542, 89,
        639, 324, 958, 960, 432, 308, 686, 128, 407, 48, 493, 967, 969, 186, 16,
        607, 425, 43, 318, 29, 976, 978, 32, 495, 81, 793, 595, 494, 272, 985,
        987, 616, 560, 489, 994,
      ],
      expectedOutput: 56004334,
    },
    { input: [2, 5, 3, 4, 1], expectedOutput: 3 },
    { input: [2, 1, 3], expectedOutput: 0 },
    { input: [1, 2, 3, 4], expectedOutput: 4 },
  ];

  return { method, tests };
})();

export default numTeams;
