var totalCalories = 174132;
var totalKilometers = 2500;
var totalHours = 257;
var totalMinutes = 57;
var totalRuns = 254;
var generalStep = 10;
var caloriesStep = 1000;

$(document).ready(function(){
    averagePaceEvolution();
    distancesEvolution();
    timesOfDay();
    calories();
    initializeGoogleMap();
    increaseNumber("totalRuns", " Runs", totalRuns, 0, generalStep);
    increaseNumber("totalKilometers", " Km", totalKilometers, 0, generalStep);
    increaseNumber("totalHours", " Hs,", totalHours, 0, generalStep);
    increaseNumber("totalMinutes", " Min", totalMinutes, 0, generalStep);
    increaseNumber("totalCalories", " Cal", totalCalories, 0, caloriesStep);
});

function distancesEvolution() {
    var maxDistanceDate = new Date("07-29-12");
    var lesionPointDate = new Date("08-17-13");
    c3.generate(
        {
            bindto: '#distances',
            data:
                {
                    x: "x",
                    columns: [
                        dateAxisValues(),
                        ["Kilometers", 8.3818998336792, 8.12969970703125, 8.294599533081055,
                         6.478899955749512, 6.764699935913086, 6.621399879455566, 8.135600090026855,
                         6.39739990234375, 6.4197001457214355, 6.125899791717529, 6.776700019836426,
                         7.085599899291992, 4.60129976272583, 6.065800189971924, 6.176000118255615,
                         6.397900104522705, 6.969299793243408, 6.808599948883057, 4.318600177764893,
                         6.992199897766113, 7.1539998054504395, 6.20550012588501, 7.033100128173828,
                         7.252600193023682, 6.839900016784668, 6.853099822998047, 7.78849983215332,
                         6.035699844360352, 6.852200031280518, 2.136199951171875, 0.6466000080108643,
                         3.803100109100342, 6.982399940490723, 6.85260009765625, 6.8043999671936035,
                         6.7718000411987305, 6.820300102233887, 0.31709998846054077, 11.279500007629395,
                         6.547599792480469, 10.442500114440918, 10.577799797058105, 10.31410026550293,
                         10.360699653625488, 10.380800247192383, 10.710200309753418, 10.585700035095215,
                         6.93209981918335, 9.680800437927246, 9.512700080871582, 4.813000202178955,
                         9.6899995803833, 11.29580020904541, 9.307299613952637, 8.867199897766113,
                         9.14430046081543, 8.822699546813965, 10.485300064086914, 10.392000198364258,
                         11.804699897766113, 10.533100128173828, 11.508399963378906, 11.876799583435059,
                         11.365500450134277, 11.514200210571289, 11.864100456237793, 11.72089958190918,
                         11.497200012207031, 11.616700172424316, 4.5894999504089355, 11.60770034790039,
                         4.764200210571289, 12.698200225830078, 11.42140007019043, 11.628499984741211,
                         11.489700317382812, 8.853099822998047, 11.851699829101562, 11.155599594116211,
                         11.500200271606445, 11.80370044708252, 12.114500045776367, 11.590999603271484,
                         11.882499694824219, 11.718099594116211, 11.650799751281738, 12.189900398254395,
                         11.553000450134277, 11.541500091552734, 11.384300231933594, 16.124500274658203,
                         12.596099853515625, 12.75529956817627, 14.52970027923584, 14.716400146484375,
                         14.806699752807617, 12.59179973602295, 10.780799865722656, 7.9105000495910645,
                         8.187899589538574, 8.46619987487793, 8.001899719238281, 9.536499977111816,
                         9.492899894714355, 9.850799560546875, 9.887900352478027, 11.255999565124512,
                         11.271200180053711, 10.79580020904541, 11.466899871826172, 4.632299900054932,
                         5.010900020599365, 12.829700469970703, 9.97089958190918, 10.22089958190918,
                         9.861300468444824, 9.634099960327148, 9.828300476074219, 5.0524001121521,
                         13.469799995422363, 13.981399536132812, 13.167699813842773, 14.498800277709961,
                         19.882099151611328, 15.599200248718262, 19.10059928894043, 14.170999526977539,
                         17.949100494384766, 12.973400115966797, 14.802200317382812, 15.33650016784668,
                         15.511899948120117, 15.945199966430664, 15.657699584960938, 16.129499435424805,
                         16.761499404907227, 16.095600128173828, 17.696800231933594, 16.24090003967285,
                         15.860899925231934, 13.769399642944336, 15.950900077819824, 15.331299781799316,
                         16.6648006439209, 14.96150016784668, 16.566200256347656, 18.99410057067871,
                         15.747699737548828, 15.045100212097168, 15.884599685668945, 16.045499801635742,
                         15.123700141906738, 14.98390007019043, 15.850799560546875, 15.463600158691406,
                         16.435699462890625, 10.800800323486328, 16.8882999420166, 11.24020004272461,
                         10.57859992980957, 10.785099983215332, 9.937399864196777, 9.885600090026855,
                         10.00469970703125, 10.18019962310791, 10.130599975585938, 10.236900329589844,
                         10.7878999710083, 9.97029972076416, 9.978799819946289, 11.556699752807617,
                         11.015199661254883, 11.302599906921387, 10.323699951171875, 10.035200119018555,
                         11.326499938964844, 11.63659954071045, 11.27280044555664, 7.951600074768066,
                         9.284600257873535, 8.940400123596191, 8.775300025939941, 7.954999923706055,
                         9.207599639892578, 6.878300189971924, 9.583200454711914, 3.499000072479248,
                         6.085700035095215, 9.907899856567383, 8.593799591064453, 4.827099800109863,
                         14.411800384521484, 12.509599685668945, 7.901800155639648, 6.496300220489502,
                         11.76710033416748, 13.416199684143066, 9.102100372314453, 12.977999687194824,
                         12.062399864196777, 11.49470043182373, 10.85420036315918, 10.88129997253418,
                         12.099100112915039, 9.055999755859375, 10.860699653625488, 11.335100173950195,
                         8.49590015411377, 5.912799835205078, 8.709199905395508, 12.840499877929688,
                         11.419599533081055, 3.5627999305725098, 3.3454999923706055, 13.12969970703125,
                         12.827799797058105, 3.5961999893188477, 3.5139000415802, 3.480299949645996,
                         3.40339994430542, 3.5409998893737793, 3.5980000495910645, 11.390600204467773,
                         12.213199615478516, 3.5139999389648438, 3.0095999240875244, 13.24120044708252,
                         13.30720043182373, 3.6868999004364014, 3.55679988861084, 13.629899978637695,
                         12.086799621582031, 12.281100273132324, 12.228500366210938, 3.60479998588562,
                         1.4421000480651855, 11.433699607849121, 3.387700080871582, 3.301300048828125,
                         3.5244998931884766, 3.550299882888794, 12.57229995727539, 3.392199993133545,
                         0.850600004196167, 4.132514953613281, 5.463980674743652, 5.690999984741211,
                         6.940522193908691, 4.8279290199279785, 2.057300090789795, 4.633806228637695,
                         5.564795017242432, 5.898457050323486, 7.35255241394043]
                    ],
                    color: function(inColor, data) {
                        if (typeof data.x != 'undefined' &&
                            data.x.getDate() == maxDistanceDate.getDate() &&
                            data.x.getMonth() == maxDistanceDate.getMonth() &&
                            data.x.getYear() == maxDistanceDate.getYear()) {
                            return "#00CD00";
                        } else if (typeof data.x != 'undefined' &&
                            data.x.getDate() == lesionPointDate.getDate() &&
                            data.x.getMonth() == lesionPointDate.getMonth() &&
                            data.x.getYear() == lesionPointDate.getYear()) {
                            return "#CD0000";
                        } else {
                            return inColor;
                        }
                    },
                    type: "bar"
                },
                axis: {
                    x: {
                        type: 'timeseries',
                        tick: {
                            format: '%m-%y',
                            count: 254
                        }
                    }
                }, zoom: {
                    enabled: true
                },
                transition: {
                    duration: 2000
                }
        }
    );
}

function averagePaceEvolution() {
    var firstComebackAfterLesionDate = new Date("10-08-13");
    c3.generate(
        {
            bindto: '#averagePaces',
            data:
                {
                    x: "x",
                    columns: [
                        dateAxisValues(),
                        ["Average Paces", 5.249406563319236, 4.920230936132195, 4.942975225805799,
                         5.710846015945257, 5.617396242257837, 5.587942228772666, 5.2854122036691775,
                         5.939913180365406, 6.075050098094144, 6.039929032144067, 5.459884588619151,
                         5.3629898018651945, 5.650577302226771, 6.5943484366874845, 6.314766718465573,
                         6.095750068437411, 5.595971066965679, 5.874922935744221, 5.788912835394464,
                         5.434627235434207, 5.591277758985271, 5.962452542005737, 5.403022750632565,
                         5.239500177681436, 5.555636764682302, 5.399016642926047, 4.493805065708449,
                         4.804745223886021, 5.691602670961695, 5.617451677881113, 6.1862046867354685,
                         6.573584518634714, 5.5854720915999385, 5.691270385578011, 5.437658012225907,
                         5.611506507695599, 5.424981224489111, 3.153579427280357, 5.585353956947305,
                         5.498197987198893, 6.224563015336873, 6.239482809870905, 6.205097715993483,
                         6.370226162950764, 6.261559653609563, 6.162349731208671, 6.234826207165084,
                         6.058770227712603, 6.197834609309082, 6.307357478940156, 6.025347762684705,
                         5.985552374782015, 6.019936502200809, 6.016782775108047, 6.089859326798763,
                         6.014675505871933, 6.120575648470356, 5.913040124846357, 6.254811273986625,
                         6.014553577379449, 6.0760838899474106, 5.908727556948322, 5.978041432897959,
                         5.983018547959903, 6.079449611770028, 6.1530160056609065, 6.1428732066888125,
                         6.175416616621134, 6.19797351496713, 6.972437159989232, 6.116629295383433,
                         5.667268126156762, 5.9851001439876805, 6.128845813106421, 5.933697389219679,
                         6.092413036578224, 6.099558468743577, 5.906325759965393, 6.185234546818318,
                         6.08685051971028, 5.930343650605066, 5.943291074987637, 6.03916852695284,
                         5.97517372804362, 6.315017158341633, 5.836509205517769, 5.906528982821752,
                         5.972474449198003, 5.891781784048111, 5.973138323360115, 5.891655454854941,
                         5.557275729317333, 5.723111371067345, 5.299489908270129, 5.572014839484309,
                         5.267885572219413, 5.718007076781925, 5.936479741497359, 6.067884419327116,
                         6.350835086746641, 5.905837416899034, 5.748634900960599, 5.767315066534197,
                         5.793803854460109, 5.684817730358033, 5.562353789924303, 5.863539672166816,
                         5.589466870749853, 5.835602621398512, 5.406866781171791, 6.044513655013564,
                         5.787383480169944, 5.534034108292953, 5.516051941771623, 5.381131040299924,
                         5.577357689890345, 5.501292307351175, 5.3925905225447615, 6.333623483823693,
                         5.790731861386796, 5.793411438580791, 5.923585827647829, 5.517697910701598,
                         6.136173000128742, 6.154161653760937, 5.811335985896049, 6.068732119867801,
                         5.849875320094643, 5.858140450510292, 6.080177140577501, 5.86835321064235,
                         5.8664638312747925, 5.644331848423128, 5.747970799391508, 5.641836584223999,
                         5.369448032414743, 5.7779765438638275, 5.933275994748993, 5.664710685692589,
                         5.800427493628152, 6.318358262234056, 5.642314826180093, 5.805117717785227,
                         5.460611377502174, 5.814924908865031, 5.553476269535523, 6.317751111902851,
                         5.715120398530582, 5.982013993342136, 5.665865163803771, 5.796017646674939,
                         5.9509246517402286, 5.8729702939671045, 5.488682111440338, 5.626115465168772,
                         5.536728157232646, 5.647729628642016, 5.447558387514904, 5.78281523041685,
                         5.671828067807465, 5.65595127490086, 6.138426634091223, 6.069434273447026,
                         5.997181500393491, 5.893794053292112, 5.922650202810885, 5.8611491826846756,
                         5.747179726046822, 6.017873251597835, 6.012747132181969, 5.7109729777279865,
                         5.719369774258169, 5.6624140044812385, 5.811869802859702, 5.978954010721614,
                         5.562177225046427, 5.757695774061969, 5.76609160376123, 7.1683685628093645,
                         7.2162503650259575, 7.27036811567829, 7.407154149471682, 7.542426219414388,
                         6.950780062451398, 7.414622594453554, 6.678353468911545, 6.573306522884163,
                         6.737104977826684, 6.762280702260986, 6.632688998154752, 6.83640309223541,
                         6.79998316554909, 6.714843169300676, 5.821458287219403, 6.7730859884250485,
                         7.393495213717427, 6.931918292027135, 7.251073631395006, 7.0118664041723,
                         7.2124951070665935, 7.220718842764253, 7.001897648578117, 6.80065802677857,
                         7.355918966650918, 7.508834124692077, 7.273932851428079, 6.79305862483314,
                         7.0622298887243415, 6.934109244808888, 6.889266597592841, 7.0090729220513,
                         7.005499603401213, 7.01695309508517, 7.173815589517821, 6.85468837888219,
                         7.016012209719735, 7.229853755971072, 7.114601924976074, 7.1832889008727285,
                         7.051771873052087, 7.060152719863884, 6.948304517906109, 7.111126590873508,
                         6.959683185090534, 7.11439966824943, 8.306751937329247, 6.796966812765834,
                         6.763255762253943, 6.780764510867481, 7.028790143649076, 6.749866113778729,
                         7.032465388788701, 6.92120397273823, 6.542094092015668, 6.935197541579564,
                         5.547465316801921, 7.871467948853221, 7.379637926379846, 7.572774249609436,
                         7.660661318838674, 7.041658683676631, 6.760895006391559, 7.369848490833304,
                         10.580766465555298, 8.227435443463298, 5.673519334226853, 5.974345473758791,
                         5.475092354484577, 7.2494852048429905, 2.430369795045557, 6.474159367000501,
                         7.367746677633611, 7.290042062379986, 5.57629482821014]
                    ],
                    color: function(inColor, data) {
                        if (typeof data.x != 'undefined' &&
                            data.x.getDate() == firstComebackAfterLesionDate.getDate() &&
                            data.x.getMonth() == firstComebackAfterLesionDate.getMonth() &&
                            data.x.getYear() == firstComebackAfterLesionDate.getYear()) {
                            return "#CD0000";
                        } else {
                            return inColor;
                        }
                    },
                    type: "bar"
                },
                axis: {
                    x: {
                        type: 'timeseries',
                        tick: {
                            format: '%m-%y',
                            count: 254
                        }
                    }
                }, zoom: {
                    enabled: true
                },
                transition: {
                    duration: 2000
                }
        }
    );
}

function timesOfDay() {
    c3.generate(
        {
            bindto: '#timesOfDay',
            color: {
                pattern: ['#FABF62', '#ACB6DD']
            },
            data: {
                x: 'x',
                columns: [
                    ["x", "Morning", "Afternoon", "Evening"],
                    ["value", 0.2217, 0.7198, 0.0585]
                ],
                type: "bar",
                color: function(inColor, data) {
                    var colors = ['#ADD8E6', '#FABF62', '#003366'];
                    if(data.index !== undefined) {
                        return colors[data.index];
                    }

                    return inColor;
                },
                labels: {
                    format: {
                        value: d3.format("%")
                    }
                }
            },
            axis: {
                rotated: true,
                x: {
                    type: 'category'
                },
                y: {
                    show: false
                }
            },
            tooltip: {
                grouped: false
            },
            legend: {
                show: false
            },
            transition: {
                duration: 1000
            }
        }
    );
}

function calories() {
    c3.generate({
        bindto: '#calories',
        data: {
            x: "x",
            columns: [
                dateAxisValues(),
                ["Calories", 573, 551, 523, 430, 451, 439, 523, 426, 425, 406, 450, 471, 306, 391,
                 402, 416, 451, 448, 288, 463, 472, 411, 466, 478, 452, 452, 496, 397, 450, 142, 43,
                 251, 462, 453, 452, 447, 451, 20, 752, 436, 696, 705, 688, 691, 693, 715, 707, 463,
                 646, 635, 319, 646, 751, 615, 586, 607, 588, 696, 706, 809, 719, 788, 811, 778, 788,
                 807, 801, 785, 792, 313, 792, 320, 871, 776, 791, 784, 606, 796, 764, 785, 797, 825,
                 788, 809, 797, 796, 832, 789, 788, 774, 1101, 859, 868, 993, 1007, 1012, 857, 740,
                 532, 559, 576, 551, 651, 647, 670, 678, 766, 771, 740, 785, 319, 360, 919, 713, 727,
                 706, 690, 705, 359, 965, 997, 943, 1041, 1426, 1115, 1366, 1017, 1286, 929, 1058,
                 1096, 1106, 1141, 1120, 1154, 1197, 1148, 1268, 1159, 1135, 987, 1141, 1098, 1190,
                 1070, 1184, 1364, 1129, 1075, 1138, 1147, 1083, 1072, 1102, 1077, 1140, 749, 1180,
                 782, 739, 752, 694, 690, 699, 711, 707, 715, 754, 696, 697, 801, 767, 786, 721, 701,
                 790, 810, 786, 550, 646, 621, 610, 552, 641, 470, 689, 250, 438, 709, 616, 345, 1035,
                 899, 552, 467, 842, 964, 651, 933, 865, 825, 779, 768, 865, 649, 781, 815, 611, 425,
                 625, 917, 818, 256, 241, 944, 920, 259, 253, 250, 245, 254, 259, 817, 876, 253, 216,
                 945, 955, 265, 256, 978, 869, 882, 871, 259, 100, 822, 243, 237, 253, 255, 903, 244,
                 61, 264, 393, 405, 507, 332, 202, 357, 388, 415, 513]
            ],
            type: "bar"
        },
        axis: {
            x: {
                type: 'timeseries',
                tick: {
                    format: '%m-%y',
                    count: 254
                }
            }
        }, zoom: {
            enabled: true
        },
        transition: {
            duration: 2000
        }
    });
}

function dateAxisValues() {
    return ["x", "2011-10-14", "2011-10-15", "2011-10-16", "2011-10-17", "2011-10-19",
     "2011-10-21", "2011-10-22", "2011-10-24", "2011-10-26", "2011-10-28", "2011-10-29",
     "2011-10-30", "2011-10-31", "2011-11-22", "2011-11-23", "2011-11-25", "2011-11-26",
     "2011-11-27", "2011-12-01", "2011-12-02", "2011-12-03", "2011-12-04", "2011-12-05",
     "2011-12-06", "2011-12-07", "2011-12-08", "2011-12-10", "2011-12-11", "2011-12-12",
     "2011-12-13", "2011-12-13", "2011-12-13", "2011-12-14", "2011-12-15", "2011-12-16",
     "2011-12-20", "2011-12-21", "2011-12-24", "2011-12-24", "2011-12-25", "2011-12-26",
     "2011-12-27", "2011-12-28", "2011-12-29", "2011-12-30", "2011-12-31", "2012-01-02",
     "2012-01-05", "2012-01-09", "2012-01-12", "2012-01-14", "2012-01-16", "2012-01-25",
     "2012-01-29", "2012-01-30", "2012-01-31", "2012-02-01", "2012-02-03", "2012-02-04",
     "2012-02-05", "2012-02-06", "2012-02-08", "2012-02-09", "2012-02-10", "2012-02-11",
     "2012-02-14", "2012-02-15", "2012-02-17", "2012-02-18", "2012-02-19", "2012-02-21",
     "2012-02-21", "2012-02-22", "2012-02-23", "2012-02-24", "2012-02-25", "2012-02-26",
     "2012-02-29", "2012-03-01", "2012-03-02", "2012-03-03", "2012-03-04", "2012-03-07",
     "2012-03-08", "2012-03-09", "2012-03-10", "2012-03-11", "2012-03-13", "2012-03-14",
     "2012-03-15", "2012-03-17", "2012-03-19", "2012-03-22", "2012-03-23", "2012-03-24",
     "2012-03-27", "2012-03-28", "2012-04-21", "2012-05-02", "2012-05-03", "2012-05-04",
     "2012-05-05", "2012-05-07", "2012-05-09", "2012-05-11", "2012-05-12", "2012-05-15",
     "2012-05-16", "2012-05-17", "2012-05-19", "2012-05-21", "2012-05-23", "2012-05-24",
     "2012-06-01", "2012-06-02", "2012-06-04", "2012-06-07", "2012-06-08", "2012-07-09",
     "2012-07-11", "2012-07-13", "2012-07-16", "2012-07-20", "2012-07-29", "2012-08-10",
     "2012-08-12", "2012-08-16", "2012-08-18", "2012-08-19", "2012-08-23", "2012-08-30",
     "2012-09-02", "2012-09-08", "2012-09-09", "2012-09-14", "2012-09-15", "2012-09-16",
     "2012-09-23", "2012-09-26", "2012-10-12", "2012-10-14", "2012-10-18", "2012-10-19",
     "2012-10-26", "2012-10-28", "2012-11-02", "2012-11-04", "2012-11-07", "2012-11-08",
     "2012-11-10", "2012-11-15", "2012-11-16", "2012-11-18", "2012-12-07", "2012-12-11",
     "2012-12-20", "2012-12-23", "2012-12-26", "2012-12-29", "2013-01-01", "2013-01-03",
     "2013-01-09", "2013-01-10", "2013-01-12", "2013-01-13", "2013-01-14", "2013-01-16",
     "2013-01-18", "2013-01-19", "2013-01-23", "2013-01-27", "2013-01-28", "2013-01-30",
     "2013-02-02", "2013-02-03", "2013-02-05", "2013-02-14", "2013-02-22", "2013-02-23",
     "2013-02-25", "2013-02-26", "2013-03-02", "2013-03-03", "2013-03-08", "2013-03-10",
     "2013-03-13", "2013-03-15", "2013-03-15", "2013-03-16", "2013-03-17", "2013-03-17",
     "2013-03-22", "2013-03-23", "2013-03-24", "2013-03-24", "2013-04-05", "2013-04-07",
     "2013-04-16", "2013-04-19", "2013-04-20", "2013-04-25", "2013-05-11", "2013-05-12",
     "2013-05-17", "2013-05-20", "2013-05-25", "2013-05-29", "2013-06-29", "2013-07-01",
     "2013-07-03", "2013-07-07", "2013-07-08", "2013-07-12", "2013-07-12", "2013-07-13",
     "2013-07-16", "2013-07-17", "2013-07-17", "2013-07-20", "2013-07-20", "2013-07-22",
     "2013-07-22", "2013-07-23", "2013-07-25", "2013-07-26", "2013-07-26", "2013-07-29",
     "2013-07-31", "2013-08-01", "2013-08-01", "2013-08-04", "2013-08-05", "2013-08-07",
     "2013-08-09", "2013-08-10", "2013-08-10", "2013-08-14", "2013-08-15", "2013-08-15",
     "2013-08-16", "2013-08-16", "2013-08-17", "2013-10-08", "2013-10-08", "2014-05-03",
     "2014-05-07", "2014-05-10", "2014-05-16", "2014-08-02", "2014-08-10", "2014-08-10",
     "2014-08-17", "2014-08-23", "2016-04-10"];
}

function increaseNumber(id, text, numberLimit, miliseconds, step) {
    var count = 0;
    var interval = setInterval(
        function(){
            if (count + step < numberLimit) {
                count += step;
            } else {
                count++;
            }
            document.getElementById(id).innerHTML = count + text;
            if (count === numberLimit) {
                clearInterval(interval);
            }
    }, miliseconds);
}

function initializeGoogleMap() {
    var mapProp = {
        center: new google.maps.LatLng(-35.159951, -57.929591),
        zoom: 7,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
    var rosedalMarker = new google.maps.Marker({
        position: new google.maps.LatLng(-34.571072, -58.417238),
        map: map,
        title: 'El Rosedal'
    });
    var lagosDePalermoMarker = new google.maps.Marker({
        position: new google.maps.LatLng(-34.558604, -58.432069),
        map: map,
        title: 'Lagos De Palermo'
    });
    var sanBernardoMarker = new google.maps.Marker({
        position: new google.maps.LatLng(-36.686284, -56.676972),
        map: map,
        title: 'San Bernardo'
    });
    var vicenteLopezMarker = new google.maps.Marker({
        position: new google.maps.LatLng(-34.526051, -58.468890),
        map: map,
        title: 'Vicente Lopez'
    });
    var plazaDelEcuadorMarker = new google.maps.Marker({
        position: new google.maps.LatLng(-34.5651917,-58.4210413),
        map: map,
        title: 'Plaza del Ecuador'
    });

    var rosedalInfoWindow = new google.maps.InfoWindow({
      content: "El Rosedal"
    });
    var lagosDePalermoInfoWindow = new google.maps.InfoWindow({
      content: "Lagos De Palermo"
    });
    var sanBernardoInfoWindow = new google.maps.InfoWindow({
      content: "San Bernardo"
    });
    var vicenteLopezInfoWindow = new google.maps.InfoWindow({
      content: "Vicente Lopez"
    });
    var plazaDelEcuadorInfoWindow = new google.maps.InfoWindow({
      content: "Plaza del Ecuador"
    });

    google.maps.event.addListener(rosedalMarker, 'click', function() {
        rosedalInfoWindow.open(map, rosedalMarker);
    });
    google.maps.event.addListener(lagosDePalermoMarker, 'click', function() {
        lagosDePalermoInfoWindow.open(map, lagosDePalermoMarker);
    });
    google.maps.event.addListener(sanBernardoMarker, 'click', function() {
        sanBernardoInfoWindow.open(map, sanBernardoMarker);
    });
    google.maps.event.addListener(plazaDelEcuadorMarker, 'click', function() {
        plazaDelEcuadorInfoWindow.open(map, plazaDelEcuadorMarker);
    });
}
