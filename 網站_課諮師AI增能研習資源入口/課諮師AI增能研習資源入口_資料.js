/* ============================================================
   課諮師 AI 研習｜共用資料與工具函式
   index.html 與 files.html 共用此檔
   ============================================================ */

const DRIVE_ROOT = "https://drive.google.com/drive/folders/1fsx8kElCGpMUb97z383U6h3-kfpUWN-q?usp=drive_link";

const DRIVE_FILE_IDS = {
  "1麗山高中/1142課諮師AI研習研習計劃書.docx": "1glmtXFqEBEs8vff5zxm-LHTM5rkqDwj3",
  "1麗山高中/1142課諮師AI研習研習計劃書.pdf": "1VsMArQbmCU2DMN0JasYG8XbXYm-RLBJR",
  "1麗山高中/高中課程諮詢教師.pdf": "1dUl1N8mQEK8Hdp4oHHZ83b5p5pkP_0i5",
  "1麗山高中/AI 輔助高中課程諮詢應用_DR.docx": "1M6rK8C42jLdfmNqM1WzzF1y3yw5Ecm_V",
  "1麗山高中/AI 輔助高中課程諮詢應用_DR.pdf": "1-DWSy6ccvlsu9V_P6gPk80vZGaY4q_83",
  "1麗山高中/AI 輔助高中課程諮詢應用_LM簡報.pdf": "1SPehHDKK4TLPCjQoqgayLr1lW5w1ClHK",
  "1麗山高中/AI 輔助高中課程諮詢應用1.png": "1TMZxAvxPTcjZQdLRlMUROziOf7U5mB41",
  "1麗山高中/AI 輔助高中課程諮詢應用2.png": "1RoTXRDcwhUdcGbBZ0FO93kXuXDcJU49i",
  "1麗山高中/AI 輔助課程諮詢與學生輔導_ 簡報.pdf": "1xaghkxlACsjsvpIHNVCXBzkeHntDM58Z",
  "1麗山高中/AI 輔助課程諮詢與學生輔導_講義.docx": "1LKvzkxDOcsbA8z9wo1YgDBN6e3UNFVbs",
  "1麗山高中/AI 輔助課程諮詢與學生輔導_講義.pdf": "1RzNIfQ9GS-nPfsGTCWVx-4e-3kkjLal3",
  "1麗山高中/AI_助攻高中升學諮詢.m4a": "1f0KeJjhfgnrIZFCXFxB9DPxHqE1Wnb7c",
  "1麗山高中/AI教育應用：打造終極輔導老師助理.mp4": "1U4U6sPFLUniC0OJRtC4zRyTdlLaaZJsJ",
  "1麗山高中/AI輔助課諮師研習資訊1.png": "1-ew3CgF6lryX51rAZDS3EvXVeDxYTtR4",
  "1麗山高中/AI輔助課諮師研習資訊2.png": "1fxaxYB6EStQqxQzTMbRSZkoWzylOQVBV",
  "1麗山高中/AI輔助課諮師研習資訊3.png": "1ykg6bNv0CSQTGorNVtxq1agcBeamU89u",
  "1麗山高中/AI輔助課諮師研習資訊4.png": "17miM7u2gjMRjLj3rN2_f6ng8Eznz07To",
  "2蘭陽女中/115年全國高中課程諮詢教師線上研習課程計畫.docx": "1XQsSf2TkJnmt6f4oJjVcL8_BJ1y799Q7",
  "2蘭陽女中/115年全國高中課程諮詢教師線上研習課程計畫.pdf": "1GUWfbC1-kadxkaXyC37sWGj11QkWWigM",
  "2蘭陽女中/課諮師AI研習＿大綱簡報.pdf": "1RcWeHqFmbm6ejEJU0WfzmVxDCO8aIkYI",
  "2蘭陽女中/課諮師AI研習＿大綱簡報2.pdf": "1qM0CILnMmiBawscFmaF_FHjtagwIdq2R",
  "2蘭陽女中/課諮師AI研習＿海報.png": "19qK0tZonsdHM8C8UhXrwJKQ5N_-KZjXX",
  "2蘭陽女中/課諮師AI研習＿LM簡報.pdf": "1zNJC2A2LsgXXFTgZ00RwR8HvE63oyupV",
  "2蘭陽女中/課諮師AI研習1.png": "1ah5Hl3xwZ8psi_5uXZjKw_NPrHS5_cQM",
  "2蘭陽女中/課諮師AI研習2.png": "1vPVCXr_G2FKwp7RbCC1qLd1fUqD6zqhG",
  "2蘭陽女中/課諮師AI研習3.png": "1frSEENZQmRT4bZLO6OePaRzC404twOUm",
  "2蘭陽女中/AI_助攻：課諮師超進化.mp4": "1BoXz0IFCkbrj8s91LIQd3vvwrv3mYVb6",
  "2蘭陽女中/NotebookLM 課諮師實戰手冊.docx": "1-UkXKtdUgUxD4Z8YBqfppp_n9oTteO-m",
  "2蘭陽女中/NotebookLM 課諮師實戰手冊.pdf": "1VrbrBTy2aSrhRxEtMAkebu8DbQX33VEo",
  "2蘭陽女中/NotebookLM_打造課諮師專屬智庫.m4a": "16fbQFnxnjDgzb8MJlVcrkt7SQRne9yQS",
  "3基隆女中/學習歷程檔案AI導讀研習/AI輔助師生理解『學習歷程檔案』.docx": "1UR9NWp5ZtJPMxfn0q0Ebn5BzCXJzglFt",
  "3基隆女中/學習歷程檔案AI導讀研習/AI輔助師生理解『學習歷程檔案』.pdf": "1I-5qn2IuqYYuU9kxhzMZQeJrZDYJ0e3r",
  "3基隆女中/學習歷程檔案AI導讀研習/AI輔助學習歷程檔案研習簡報.pptx": "17bk5fXmTlydY5zzDgA2QIGbd5MwrMUG-",
  "3基隆女中/AI輔助落點分析與面試準備/AI資料檔案/1學習歷程檔案解讀與分析_gemini.pdf": "1v_iSj9eN2wWjpYoYgTHFNxaGp7LHGTC1",
  "3基隆女中/AI輔助落點分析與面試準備/AI資料檔案/2學習歷程-課程學習成果呈現指南（互動版）_ChatGPT.pdf": "1gi3u0LiznaGh405g8PDxdZNoPuD-4APJ",
  "3基隆女中/AI輔助落點分析與面試準備/AI資料檔案/大學面試準備策略與高分技巧解析.pdf": "1fM_tLD7m5nXGQafGRjMjiT9jzh18xZfH",
  "3基隆女中/AI輔助落點分析與面試準備/AI資料檔案/大學甄選面試口試全攻略.pdf": "1KPP5R-RJpHRjmXGyDFJrb4vQYpFsELd7",
  "3基隆女中/AI輔助落點分析與面試準備/AI資料檔案/大學甄選面試準備研究報告_gemini.pdf": "1SyMLqhUVAGLONJa7eN2l2N6L_noGaXsA",
  "3基隆女中/AI輔助落點分析與面試準備/AI資料檔案/大學端審查評量標準深入研究_Gemini.pdf": "141cI-7hbfCVfJwkj6guKAcbHHp9psWjm",
  "3基隆女中/AI輔助落點分析與面試準備/AI資料檔案/多元表現綜整心得指南_DR.pdf": "1TDIRg3ilgqerBH3xPTqj79YKjyEokA8g",
  "3基隆女中/AI輔助落點分析與面試準備/AI資料檔案/自傳撰寫全攻略指南.pdf": "1kBf9ydWeINFi2paaDBZQmmSanhkBvnAZ",
  "3基隆女中/AI輔助落點分析與面試準備/AI資料檔案/個人履歷怎麼寫_47雲端輔導室.pdf": "1B5svHi_G5g44Rw6-ppjI6sw87O4cUhY1",
  "3基隆女中/AI輔助落點分析與面試準備/AI資料檔案/高中學習歷程檔案介紹＿monica.pdf": "1RXNPsYtNCNE67w6Gj4A3Dt1Fp1WRrlEU",
  "3基隆女中/AI輔助落點分析與面試準備/AI資料檔案/高中學習歷程檔案介紹（重點版）.pdf": "1FizgeAiqtjL8aqrwYOVKsF4XwyzVFuVT",
  "3基隆女中/AI輔助落點分析與面試準備/AI資料檔案/備審資料讀書計畫撰寫指南.pdf": "13wNfTFoWvLTXZc9_dMlstGgIv85_iEnS",
  "3基隆女中/AI輔助落點分析與面試準備/AI資料檔案/學習歷程-大學入學申請第二階段準備指南深入研究_Gemini.pdf": "1tbpaTVmtG38Wh2LXfG8mB59GkEp2JOBk",
  "3基隆女中/AI輔助落點分析與面試準備/AI資料檔案/AI 助攻完美備審與高分面試＿義守教務長演講.pdf": "1lsbRICHxHlOK-Ybz75YQ9RWGYBi6lfli",
  "3基隆女中/AI輔助落點分析與面試準備/AI資料檔案/NOPQ 撰寫全攻略報導.pdf": "1VLllRmIlpMkx-jQvCT4t3IgkRCPw2oW9",
  "3基隆女中/AI輔助落點分析與面試準備/陳坤平講師_升學AI指令集.html": "1PxKo0QZoKHTcI5OmF3ZiO8arTRsPI4mP",
  "3基隆女中/AI輔助落點分析與面試準備/AI指令集：課業.學檔.自學.備審.pdf": "1CoFK6aXw9QeCSKRK-koisLdBsASQRQd_",
  "3基隆女中/AI輔助落點分析與面試準備/AI參考資料集合.pdf": "1y9bBexG_Z01JZrENqeORESdZsu5_b8jD",
  "3基隆女中/AI輔助落點分析與面試準備/AI輔助落點分析與面試準備_橫式海報.png": "10xn7kcXrudNokFxBV3RXBiD2EG3IUO8X",
  "3基隆女中/AI輔助落點分析與面試準備/AI輔助落點分析與面試準備_Gemini海報.png": "1-aFGcutxVEap3fi9Hcm6fyN8OgVfKvFF",
  "3基隆女中/AI輔助落點分析與面試準備/AI輔助落點分析與面試準備_LM海報.png": "1r1ptLkE6YpaBhs1Tp4xDJMS_bJzcpr6-",
  "3基隆女中/AI輔助落點分析與面試準備/AI輔助落點分析與面試準備_LM簡報.pdf": "11-lBiK5w1UAULjUa4TO0F1FYtTLGLSsm",
  "3基隆女中/AI輔助落點分析與面試準備/AI輔助落點分析與面試準備.docx": "1Bdj8K1hMcppoG-4YV65hxc3qRMdOTi6X",
  "3基隆女中/AI輔助落點分析與面試準備/AI輔助落點分析與面試準備.pdf": "1VixHF16oFLM34vQYpf_tLyPBHSkr0CJU",
  "4新莊高中/AI 輔助高中課程諮詢應用_LM簡報.pdf": "16OlQqUWlV9qCpWgWNougxe2ysUkKBpOR",
  "工作手冊/108課綱選課生存攻略.m4a": "1y1wa7AqaDFzpGRkVnitDcmU08QkWpGzS",
  "工作手冊/台北市課程諮詢手冊導讀_LM簡報.pdf": "1FSEAC2xCV2p1ZCA1_t-BNHYgGjAsTXax",
  "工作手冊/台北市課程諮詢手冊導讀簡報.pdf": "1P2Ob6Wh70li5xWnHsbUflRjmjPdy1LQq",
  "工作手冊/你的高中藍圖：用課程諮詢導航你的未來.mp4": "1PMqz87V8F3oGU_tLf4AfN7nXHf7_7zoA",
  "工作手冊/臺北市課程諮詢工作手冊＿原始檔.pdf": "1WE2IFJLEVljUNZCVK7_d3NJ6lGsuzDSO",
  "工作手冊/臺北市課程諮詢工作手冊＿原始檔案.pdf": "1xFLgBwDLregZzUvY0SxWG3UTNyDM_7fl",
  "工作手冊/課程諮詢地圖_LM簡報.pdf": "1GsoM9dwWJm50rDZMv9tGyMgokZjw7Yj1",
  "工作手冊/課程諮詢地圖.png": "1c6GM2iFrY1XA6G2XRSYrD-UWmFL8IS8T",
  "研習示範/用自主學習逆轉學習歷程.m4a": "1p7GsblI0FqodE8pLyLbWnydwEVkAnLEr",
  "研習示範/研習示範_課諮說明.pdf": "1sMqagwfJ4Y7q0umxV63LX7OXLmujH2kG",
  "研習示範/研習示範_課諮說明.png": "1rmgJXvy7Ujz7sZM2d3hqXoBdP3i-B-LR",
  "研習示範/研習示範_選課諮詢.pdf": "1uvFgZWZlm8i0ZNw8VBlJ9s4Kwpf1Qpzi",
  "研習示範/研習示範_選課簡報.pdf": "1TwZykS-PJMpYtu5_UpCJ9WsGKCGRhM4a",
  "研習示範/課諮師研習案例提示詞.html": "1dd1vWBvHSxmXRcBiJjRrdK_LAhuUuGnI",
  "課諮手冊/麗山高中普通班課諮手冊.pdf": "1l3ViDSonnG0pK4DUTr8MqPoJeEZ-8_rm",
  "課諮手冊/麗山高中資優班課諮手冊.pdf": "1godtYe27g5PGXrjYQ3kCnoUJVd1U43dy",
  "課諮手冊/麗山高中體育班課諮手冊.pdf": "1RacoMwyHV1e0U6BCXHvLwCRWtkhtGZXx",
  "課諮制度/台灣高中課程諮詢教師研究_gemini.pdf": "12ReUFyo6WVYXw8xsyzuBXm1loXrYaohk",
  "課諮制度/課諮師任務與職責＿LM簡報.pdf": "1EnamTRSwQCrFwghWT385sUvlO2ODxhM4",
  "課諮制度/課諮師制度分析_LM筆記簡報.pdf": "1Q-RwolWMly8lyoT_U3mRNZFPskEm0Iuw",
  "課諮制度/課諮師制度分析_LM簡報.pdf": "1aqMd0N2D1kjyKYQ-KiHNwKjt-RwSEOS8",
  "課諮制度/課諮師研究.png": "1QyFNHqDkS3aLz6yHLAslqWPEQMJKgiuD",
  "課諮制度/課諮師職責.png": "1j6PsP7crsuNEaWubdc06CJJ3Fw1VbySI",
  "檔案資源/1課諮師工作/台灣高中課程諮詢教師研究_gemini.pdf": "1woe-e5I_5s_IS7NgbHTu5A3HjhkVB6sq",
  "檔案資源/1課諮師工作/高中生生涯發展指南生成.pdf": "1j0y_sPbH_N7QpWkMCFTp3qoYbrtmGm9S",
  "檔案資源/1課諮師工作/臺北市課程諮詢工作手冊.pdf": "1HlX7wQrogzzyWmG6OtXRq1CxqSKLswjk",
  "檔案資源/1課諮師工作/課程諮詢教師簡介_麗山獻升老師整理.pdf": "1Bf-lB6m-8fKBdbtU9zeFHI4TzjwiTFyG",
  "檔案資源/2學習歷程檔案/1學習歷程檔案解讀與分析_gemini.pdf": "1gPO0-sqMBE-beqLE2fmv-Irkn0Qd--z6",
  "檔案資源/2學習歷程檔案/學習歷程-課程學習成果呈現指南-互動版_部分1.pdf": "1izRcKaii5ifV3R9wniDplCoeQldXXv1t",
  "檔案資源/2學習歷程檔案/學習歷程-課程學習成果呈現指南-互動版_部分2.pdf": "1yEvEW-NoS-evjIOQXBi-dBNHQ38wIdMO",
  "檔案資源/2學習歷程檔案/學習歷程-課程學習成果呈現指南-互動版_部分3.pdf": "1TtO6XuRGix375zEEtBunxxkwdqAMOaRj",
  "檔案資源/2學習歷程檔案/學習歷程-課程學習成果呈現指南-導讀公版簡報.pdf": "1iVx9g0LRlL0ptQj3ZRFT5WtBWDgPSVXT",
  "檔案資源/3多元入學資訊/114申請入學簡章.pdf": "1gPuUyzSEBaRe1wzNjcLe36ptBRtORQDQ",
  "檔案資源/3多元入學資訊/115學年度大學申請入學招生規定.pdf": "1du8_GqmrlLgJgkt5EjuHSTCv9zFA22Mf",
  "檔案資源/3多元入學資訊/115學年度大學申請入學招生簡章總則.pdf": "1dQ_7Y4fe5sDCtVHsalWFgkhNOAoSI7bv",
  "檔案資源/3多元入學資訊/115學年度大學繁星推薦招生規定.pdf": "1SZ2N0M3A6s3mfy9ifrT2_SfH14Epxit1",
  "檔案資源/3多元入學資訊/115學年度考試簡章v.2.pdf": "143QBeV7w3ZaF_SAvNwT7aoFpzCSMg_ip",
  "檔案資源/3多元入學資訊/學習歷程-大學入學申請第二階段準備指南-互動版0314.pdf": "17tvKnu-VRzjvnIcrZnfk6zZRorWvKlrz",
  "檔案資源/3多元入學資訊/學習歷程-大學入學申請第二階段準備指南深入研究_Gemini.pdf": "1CFwLmZpwFUxwk-WRRrqGAo9FcKtP4oh7",
  "檔案資源/4學群選課資訊/十八學群介紹_嘉女網頁資料.pdf": "1xd5xR-9M-gsvdvMkqe9tg6TPw3LBkocG",
  "檔案資源/4學群選課資訊/大學十八學群選才與高中適性選修課程對應.pdf": "1jTq6mIr3CZqVfgmf9gDPUgaMDfnFDkRV",
  "檔案資源/5 Gem檔案/114申請入學簡章.pdf": "17y-Sz6yXqbGqPe446sC6e_AAUzWE-1sL",
  "檔案資源/5 Gem檔案/課諮師gem檔案.pdf": "1jICAXdyx0uE9RqQe9iM58A_3v-SBt7x1",
  "檔案資源/課諮師設定提示詞.docx": "1tIKrIlTp3lwOBSvJcuttxsSrenDLv1Ur",
  "檔案資源/課諮師設定提示詞.pdf": "1J5zgEvlUw8FW8qXVjyGoh1lmObYeo8r8",
  "檔案資源/AI 輔助高中課程諮詢應用_DR.pdf": "1pViiLP8oqPLsw24rpFlfj2H-BLLu81Ba",
  "Gem檔案/114申請入學簡章.pdf": "1waJW8Y2Q06elhiyRVIvdduxmbRmfGnlR",
  "Gem檔案/課諮師gem檔案1.pdf": "1AsnisEY4mRfBSf1UgcsLHR8IKGoNVBhR",
  "課諮師研習案例提示詞.html": "1Kbkf3oa9AQj9HB2JPxd8LXixFCcTdjAR",
  "檔案資源.zip": "1tqKmMW8GRYbOQNdtTFknPIa_xo9YLpUc"
};

const DRIVE_NAME_IDS = {
  "1142課諮師AI研習研習計劃書.docx": "1glmtXFqEBEs8vff5zxm-LHTM5rkqDwj3",
  "1142課諮師AI研習研習計劃書.pdf": "1VsMArQbmCU2DMN0JasYG8XbXYm-RLBJR",
  "高中課程諮詢教師.pdf": "1dUl1N8mQEK8Hdp4oHHZ83b5p5pkP_0i5",
  "AI 輔助高中課程諮詢應用_DR.docx": "1M6rK8C42jLdfmNqM1WzzF1y3yw5Ecm_V",
  "AI 輔助高中課程諮詢應用1.png": "1TMZxAvxPTcjZQdLRlMUROziOf7U5mB41",
  "AI 輔助高中課程諮詢應用2.png": "1RoTXRDcwhUdcGbBZ0FO93kXuXDcJU49i",
  "AI 輔助課程諮詢與學生輔導_ 簡報.pdf": "1xaghkxlACsjsvpIHNVCXBzkeHntDM58Z",
  "AI 輔助課程諮詢與學生輔導_講義.docx": "1LKvzkxDOcsbA8z9wo1YgDBN6e3UNFVbs",
  "AI 輔助課程諮詢與學生輔導_講義.pdf": "1RzNIfQ9GS-nPfsGTCWVx-4e-3kkjLal3",
  "AI_助攻高中升學諮詢.m4a": "1f0KeJjhfgnrIZFCXFxB9DPxHqE1Wnb7c",
  "AI教育應用：打造終極輔導老師助理.mp4": "1U4U6sPFLUniC0OJRtC4zRyTdlLaaZJsJ",
  "AI輔助課諮師研習資訊1.png": "1-ew3CgF6lryX51rAZDS3EvXVeDxYTtR4",
  "AI輔助課諮師研習資訊2.png": "1fxaxYB6EStQqxQzTMbRSZkoWzylOQVBV",
  "AI輔助課諮師研習資訊3.png": "1ykg6bNv0CSQTGorNVtxq1agcBeamU89u",
  "AI輔助課諮師研習資訊4.png": "17miM7u2gjMRjLj3rN2_f6ng8Eznz07To",
  "115年全國高中課程諮詢教師線上研習課程計畫.docx": "1XQsSf2TkJnmt6f4oJjVcL8_BJ1y799Q7",
  "115年全國高中課程諮詢教師線上研習課程計畫.pdf": "1GUWfbC1-kadxkaXyC37sWGj11QkWWigM",
  "課諮師AI研習＿大綱簡報.pdf": "1RcWeHqFmbm6ejEJU0WfzmVxDCO8aIkYI",
  "課諮師AI研習＿大綱簡報2.pdf": "1qM0CILnMmiBawscFmaF_FHjtagwIdq2R",
  "課諮師AI研習＿海報.png": "19qK0tZonsdHM8C8UhXrwJKQ5N_-KZjXX",
  "課諮師AI研習＿LM簡報.pdf": "1zNJC2A2LsgXXFTgZ00RwR8HvE63oyupV",
  "課諮師AI研習1.png": "1ah5Hl3xwZ8psi_5uXZjKw_NPrHS5_cQM",
  "課諮師AI研習2.png": "1vPVCXr_G2FKwp7RbCC1qLd1fUqD6zqhG",
  "課諮師AI研習3.png": "1frSEENZQmRT4bZLO6OePaRzC404twOUm",
  "AI_助攻：課諮師超進化.mp4": "1BoXz0IFCkbrj8s91LIQd3vvwrv3mYVb6",
  "NotebookLM 課諮師實戰手冊.docx": "1-UkXKtdUgUxD4Z8YBqfppp_n9oTteO-m",
  "NotebookLM 課諮師實戰手冊.pdf": "1VrbrBTy2aSrhRxEtMAkebu8DbQX33VEo",
  "NotebookLM_打造課諮師專屬智庫.m4a": "16fbQFnxnjDgzb8MJlVcrkt7SQRne9yQS",
  "AI輔助師生理解『學習歷程檔案』.docx": "1UR9NWp5ZtJPMxfn0q0Ebn5BzCXJzglFt",
  "AI輔助師生理解『學習歷程檔案』.pdf": "1I-5qn2IuqYYuU9kxhzMZQeJrZDYJ0e3r",
  "AI輔助學習歷程檔案研習簡報.pptx": "17bk5fXmTlydY5zzDgA2QIGbd5MwrMUG-",
  "2學習歷程-課程學習成果呈現指南（互動版）_ChatGPT.pdf": "1gi3u0LiznaGh405g8PDxdZNoPuD-4APJ",
  "大學面試準備策略與高分技巧解析.pdf": "1fM_tLD7m5nXGQafGRjMjiT9jzh18xZfH",
  "大學甄選面試口試全攻略.pdf": "1KPP5R-RJpHRjmXGyDFJrb4vQYpFsELd7",
  "大學甄選面試準備研究報告_gemini.pdf": "1SyMLqhUVAGLONJa7eN2l2N6L_noGaXsA",
  "大學端審查評量標準深入研究_Gemini.pdf": "141cI-7hbfCVfJwkj6guKAcbHHp9psWjm",
  "多元表現綜整心得指南_DR.pdf": "1TDIRg3ilgqerBH3xPTqj79YKjyEokA8g",
  "自傳撰寫全攻略指南.pdf": "1kBf9ydWeINFi2paaDBZQmmSanhkBvnAZ",
  "個人履歷怎麼寫_47雲端輔導室.pdf": "1B5svHi_G5g44Rw6-ppjI6sw87O4cUhY1",
  "高中學習歷程檔案介紹＿monica.pdf": "1RXNPsYtNCNE67w6Gj4A3Dt1Fp1WRrlEU",
  "高中學習歷程檔案介紹（重點版）.pdf": "1FizgeAiqtjL8aqrwYOVKsF4XwyzVFuVT",
  "備審資料讀書計畫撰寫指南.pdf": "13wNfTFoWvLTXZc9_dMlstGgIv85_iEnS",
  "AI 助攻完美備審與高分面試＿義守教務長演講.pdf": "1lsbRICHxHlOK-Ybz75YQ9RWGYBi6lfli",
  "NOPQ 撰寫全攻略報導.pdf": "1VLllRmIlpMkx-jQvCT4t3IgkRCPw2oW9",
  "陳坤平講師_升學AI指令集.html": "1PxKo0QZoKHTcI5OmF3ZiO8arTRsPI4mP",
  "AI指令集：課業.學檔.自學.備審.pdf": "1CoFK6aXw9QeCSKRK-koisLdBsASQRQd_",
  "AI參考資料集合.pdf": "1y9bBexG_Z01JZrENqeORESdZsu5_b8jD",
  "AI輔助落點分析與面試準備_橫式海報.png": "10xn7kcXrudNokFxBV3RXBiD2EG3IUO8X",
  "AI輔助落點分析與面試準備_Gemini海報.png": "1-aFGcutxVEap3fi9Hcm6fyN8OgVfKvFF",
  "AI輔助落點分析與面試準備_LM海報.png": "1r1ptLkE6YpaBhs1Tp4xDJMS_bJzcpr6-",
  "AI輔助落點分析與面試準備_LM簡報.pdf": "11-lBiK5w1UAULjUa4TO0F1FYtTLGLSsm",
  "AI輔助落點分析與面試準備.docx": "1Bdj8K1hMcppoG-4YV65hxc3qRMdOTi6X",
  "AI輔助落點分析與面試準備.pdf": "1VixHF16oFLM34vQYpf_tLyPBHSkr0CJU",
  "108課綱選課生存攻略.m4a": "1y1wa7AqaDFzpGRkVnitDcmU08QkWpGzS",
  "台北市課程諮詢手冊導讀_LM簡報.pdf": "1FSEAC2xCV2p1ZCA1_t-BNHYgGjAsTXax",
  "台北市課程諮詢手冊導讀簡報.pdf": "1P2Ob6Wh70li5xWnHsbUflRjmjPdy1LQq",
  "你的高中藍圖：用課程諮詢導航你的未來.mp4": "1PMqz87V8F3oGU_tLf4AfN7nXHf7_7zoA",
  "臺北市課程諮詢工作手冊＿原始檔.pdf": "1WE2IFJLEVljUNZCVK7_d3NJ6lGsuzDSO",
  "臺北市課程諮詢工作手冊＿原始檔案.pdf": "1xFLgBwDLregZzUvY0SxWG3UTNyDM_7fl",
  "課程諮詢地圖_LM簡報.pdf": "1GsoM9dwWJm50rDZMv9tGyMgokZjw7Yj1",
  "課程諮詢地圖.png": "1c6GM2iFrY1XA6G2XRSYrD-UWmFL8IS8T",
  "用自主學習逆轉學習歷程.m4a": "1p7GsblI0FqodE8pLyLbWnydwEVkAnLEr",
  "研習示範_課諮說明.pdf": "1sMqagwfJ4Y7q0umxV63LX7OXLmujH2kG",
  "研習示範_課諮說明.png": "1rmgJXvy7Ujz7sZM2d3hqXoBdP3i-B-LR",
  "研習示範_選課諮詢.pdf": "1uvFgZWZlm8i0ZNw8VBlJ9s4Kwpf1Qpzi",
  "研習示範_選課簡報.pdf": "1TwZykS-PJMpYtu5_UpCJ9WsGKCGRhM4a",
  "麗山高中普通班課諮手冊.pdf": "1l3ViDSonnG0pK4DUTr8MqPoJeEZ-8_rm",
  "麗山高中資優班課諮手冊.pdf": "1godtYe27g5PGXrjYQ3kCnoUJVd1U43dy",
  "麗山高中體育班課諮手冊.pdf": "1RacoMwyHV1e0U6BCXHvLwCRWtkhtGZXx",
  "課諮師任務與職責＿LM簡報.pdf": "1EnamTRSwQCrFwghWT385sUvlO2ODxhM4",
  "課諮師制度分析_LM筆記簡報.pdf": "1Q-RwolWMly8lyoT_U3mRNZFPskEm0Iuw",
  "課諮師制度分析_LM簡報.pdf": "1aqMd0N2D1kjyKYQ-KiHNwKjt-RwSEOS8",
  "課諮師研究.png": "1QyFNHqDkS3aLz6yHLAslqWPEQMJKgiuD",
  "課諮師職責.png": "1j6PsP7crsuNEaWubdc06CJJ3Fw1VbySI",
  "高中生生涯發展指南生成.pdf": "1j0y_sPbH_N7QpWkMCFTp3qoYbrtmGm9S",
  "臺北市課程諮詢工作手冊.pdf": "1HlX7wQrogzzyWmG6OtXRq1CxqSKLswjk",
  "課程諮詢教師簡介_麗山獻升老師整理.pdf": "1Bf-lB6m-8fKBdbtU9zeFHI4TzjwiTFyG",
  "學習歷程-課程學習成果呈現指南-互動版_部分1.pdf": "1izRcKaii5ifV3R9wniDplCoeQldXXv1t",
  "學習歷程-課程學習成果呈現指南-互動版_部分2.pdf": "1yEvEW-NoS-evjIOQXBi-dBNHQ38wIdMO",
  "學習歷程-課程學習成果呈現指南-互動版_部分3.pdf": "1TtO6XuRGix375zEEtBunxxkwdqAMOaRj",
  "學習歷程-課程學習成果呈現指南-導讀公版簡報.pdf": "1iVx9g0LRlL0ptQj3ZRFT5WtBWDgPSVXT",
  "115學年度大學申請入學招生規定.pdf": "1du8_GqmrlLgJgkt5EjuHSTCv9zFA22Mf",
  "115學年度大學申請入學招生簡章總則.pdf": "1dQ_7Y4fe5sDCtVHsalWFgkhNOAoSI7bv",
  "115學年度大學繁星推薦招生規定.pdf": "1SZ2N0M3A6s3mfy9ifrT2_SfH14Epxit1",
  "115學年度考試簡章v.2.pdf": "143QBeV7w3ZaF_SAvNwT7aoFpzCSMg_ip",
  "學習歷程-大學入學申請第二階段準備指南-互動版0314.pdf": "17tvKnu-VRzjvnIcrZnfk6zZRorWvKlrz",
  "十八學群介紹_嘉女網頁資料.pdf": "1xd5xR-9M-gsvdvMkqe9tg6TPw3LBkocG",
  "大學十八學群選才與高中適性選修課程對應.pdf": "1jTq6mIr3CZqVfgmf9gDPUgaMDfnFDkRV",
  "課諮師gem檔案.pdf": "1jICAXdyx0uE9RqQe9iM58A_3v-SBt7x1",
  "課諮師設定提示詞.docx": "1tIKrIlTp3lwOBSvJcuttxsSrenDLv1Ur",
  "課諮師設定提示詞.pdf": "1J5zgEvlUw8FW8qXVjyGoh1lmObYeo8r8",
  "課諮師gem檔案1.pdf": "1AsnisEY4mRfBSf1UgcsLHR8IKGoNVBhR",
  "檔案資源.zip": "1tqKmMW8GRYbOQNdtTFknPIa_xo9YLpUc"
};

const ONLINE_FALLBACKS = {
  "網頁程式/自主學習/AI輔助自主學習（claude優化）.html": "https://froglssh.github.io/ai-assisted-self-learning-online/",
  "網頁程式/自主學習/AI輔助自主學習（claude優化）使用說明.html": "https://froglssh.github.io/ai-assisted-self-learning-docs-online/",
  "網頁程式/學程檔案/學習歷程檔案輔助程式(claude優化).html": "https://froglssh.github.io/learning-portfolio-assistant-online/",
  "網頁程式/學程檔案/學習歷程檔案輔助程式(claude優化)使用說明.html": "https://froglssh.github.io/learning-portfolio-assistant-docs-online/",
  "網頁程式/升學輔導/AI智慧輔助升學系統(codex優化).html": "https://froglssh.github.io/ai-college-admission-assistant-online/",
  "網頁程式/升學輔導/AI智慧輔助升學系統(codex優化)使用說明.html": "https://froglssh.github.io/ai-college-admission-assistant-docs-online/"
};

function driveView(id) {
  return `https://drive.google.com/file/d/${id}/view?usp=drive_link`;
}

function driveThumbnail(id, size = "w1600") {
  return `https://drive.google.com/thumbnail?id=${id}&sz=${size}`;
}

function cloudHref(href) {
  if (!href || /^(https?:|mailto:|#)/.test(href)) return href;
  if (ONLINE_FALLBACKS[href]) return ONLINE_FALLBACKS[href];
  const fileName = href.split("/").pop();
  const id = DRIVE_FILE_IDS[href] || DRIVE_NAME_IDS[fileName];
  if (id) return driveView(id);
  return DRIVE_ROOT;
}

/* 教材檔案庫資料：[檔名, 分類標籤, 雲端路徑] */
const FILES = [
  ["AI 輔助課程諮詢與學生輔導_講義.pdf", "1麗山高中", "1麗山高中/AI 輔助課程諮詢與學生輔導_講義.pdf"],
  ["AI 輔助高中課程諮詢應用_DR.pdf", "1麗山高中", "1麗山高中/AI 輔助高中課程諮詢應用_DR.pdf"],
  ["AI 輔助高中課程諮詢應用_LM簡報.pdf", "1麗山高中", "1麗山高中/AI 輔助高中課程諮詢應用_LM簡報.pdf"],
  ["NotebookLM 課諮師實戰手冊.pdf", "2蘭陽女中", "2蘭陽女中/NotebookLM 課諮師實戰手冊.pdf"],
  ["課諮師AI研習＿大綱簡報.pdf", "2蘭陽女中", "2蘭陽女中/課諮師AI研習＿大綱簡報.pdf"],
  ["AI輔助落點分析與面試準備.pdf", "3基隆女中", "3基隆女中/AI輔助落點分析與面試準備/AI輔助落點分析與面試準備.pdf"],
  ["AI參考資料集合.pdf", "3基隆女中", "3基隆女中/AI輔助落點分析與面試準備/AI參考資料集合.pdf"],
  ["AI指令集：課業.學檔.自學.備審.pdf", "提示詞", "3基隆女中/AI輔助落點分析與面試準備/提示詞/AI指令集：課業.學檔.自學.備審.pdf"],
  ["備審與面試設定提示詞_GPT.pdf", "提示詞", "3基隆女中/AI輔助落點分析與面試準備/提示詞/備審與面試設定提示詞_GPT.pdf"],
  ["備審與面試輔助LM：提示詞.pdf", "提示詞", "3基隆女中/AI輔助落點分析與面試準備/提示詞/備審與面試輔助LM：提示詞.pdf"],
  ["備審與面試輔助gem：提示詞.pdf", "提示詞", "3基隆女中/AI輔助落點分析與面試準備/提示詞/備審與面試輔助gem：提示詞.pdf"],
  ["陳坤平講師_升學AI指令集.html", "提示詞", "3基隆女中/AI輔助落點分析與面試準備/提示詞/陳坤平講師_升學AI指令集.html"],
  ["AI輔助師生理解『學習歷程檔案』.pdf", "學習歷程", "3基隆女中/學習歷程檔案AI導讀研習/AI輔助師生理解『學習歷程檔案』.pdf"],
  ["臺北市課程諮詢工作手冊＿原始檔.pdf", "工作手冊", "工作手冊/臺北市課程諮詢工作手冊＿原始檔.pdf"],
  ["台北市課程諮詢手冊導讀_LM簡報.pdf", "工作手冊", "工作手冊/台北市課程諮詢手冊導讀_LM簡報.pdf"],
  ["課程諮詢地圖_LM簡報.pdf", "工作手冊", "工作手冊/課程諮詢地圖_LM簡報.pdf"],
  ["課諮師任務與職責＿LM簡報.pdf", "課諮制度", "課諮制度/課諮師任務與職責＿LM簡報.pdf"],
  ["課諮師制度分析_LM簡報.pdf", "課諮制度", "課諮制度/課諮師制度分析_LM簡報.pdf"],
  ["台灣高中課程諮詢教師研究_gemini.pdf", "課諮制度", "課諮制度/台灣高中課程諮詢教師研究_gemini.pdf"],
  ["麗山高中普通班課諮手冊.pdf", "課諮手冊", "課諮手冊/麗山高中普通班課諮手冊.pdf"],
  ["麗山高中資優班課諮手冊.pdf", "課諮手冊", "課諮手冊/麗山高中資優班課諮手冊.pdf"],
  ["麗山高中體育班課諮手冊.pdf", "課諮手冊", "課諮手冊/麗山高中體育班課諮手冊.pdf"],
  ["高中生生涯發展指南生成.pdf", "課諮師工作", "檔案資源/1課諮師工作/高中生生涯發展指南生成.pdf"],
  ["課程諮詢教師簡介_麗山獻升老師整理.pdf", "課諮師工作", "檔案資源/1課諮師工作/課程諮詢教師簡介_麗山獻升老師整理.pdf"],
  ["1學習歷程檔案解讀與分析_gemini.pdf", "學習歷程", "檔案資源/2學習歷程檔案/1學習歷程檔案解讀與分析_gemini.pdf"],
  ["學習歷程-課程學習成果呈現指南-互動版_部分1.pdf", "學習歷程", "檔案資源/2學習歷程檔案/學習歷程-課程學習成果呈現指南-互動版_部分1.pdf"],
  ["學習歷程-課程學習成果呈現指南-互動版_部分2.pdf", "學習歷程", "檔案資源/2學習歷程檔案/學習歷程-課程學習成果呈現指南-互動版_部分2.pdf"],
  ["學習歷程-課程學習成果呈現指南-互動版_部分3.pdf", "學習歷程", "檔案資源/2學習歷程檔案/學習歷程-課程學習成果呈現指南-互動版_部分3.pdf"],
  ["學習歷程-課程學習成果呈現指南-導讀公版簡報.pdf", "學習歷程", "檔案資源/2學習歷程檔案/學習歷程-課程學習成果呈現指南-導讀公版簡報.pdf"],
  ["114申請入學簡章.pdf", "多元入學", "檔案資源/3多元入學資訊/114申請入學簡章.pdf"],
  ["115學年度大學申請入學招生簡章總則.pdf", "多元入學", "檔案資源/3多元入學資訊/115學年度大學申請入學招生簡章總則.pdf"],
  ["115學年度大學申請入學招生規定.pdf", "多元入學", "檔案資源/3多元入學資訊/115學年度大學申請入學招生規定.pdf"],
  ["115學年度大學繁星推薦招生規定.pdf", "多元入學", "檔案資源/3多元入學資訊/115學年度大學繁星推薦招生規定.pdf"],
  ["115學年度考試簡章v.2.pdf", "多元入學", "檔案資源/3多元入學資訊/115學年度考試簡章v.2.pdf"],
  ["學習歷程-大學入學申請第二階段準備指南-互動版0314.pdf", "多元入學", "檔案資源/3多元入學資訊/學習歷程-大學入學申請第二階段準備指南-互動版0314.pdf"],
  ["學習歷程-大學入學申請第二階段準備指南深入研究_Gemini.pdf", "多元入學", "檔案資源/3多元入學資訊/學習歷程-大學入學申請第二階段準備指南深入研究_Gemini.pdf"],
  ["十八學群介紹_嘉女網頁資料.pdf", "學群選課", "檔案資源/4學群選課資訊/十八學群介紹_嘉女網頁資料.pdf"],
  ["大學十八學群選才與高中適性選修課程對應.pdf", "學群選課", "檔案資源/4學群選課資訊/大學十八學群選才與高中適性選修課程對應.pdf"],
  ["學類對照學群表20241224_改版.pdf", "學群選課", "檔案資源/4學群選課資訊/學類對照學群表20241224_改版.pdf"],
  ["課諮師設定提示詞.pdf", "提示詞", "檔案資源/課諮師設定提示詞.pdf"],
  ["課諮師gem檔案.pdf", "Gem檔案", "檔案資源/5 Gem檔案/課諮師gem檔案.pdf"],
  ["AI智慧輔助升學系統 使用說明.html", "網頁程式", "網頁程式/升學輔導/AI智慧輔助升學系統(codex優化)使用說明.html"],
  ["學習歷程檔案輔助程式 使用說明.html", "網頁程式", "網頁程式/學程檔案/學習歷程檔案輔助程式(claude優化)使用說明.html"],
  ["AI輔助自主學習 使用說明.html", "網頁程式", "網頁程式/自主學習/AI輔助自主學習（claude優化）使用說明.html"],
  ["AI 輔助課程諮詢與學生輔導_講義.docx", "1麗山高中", "1麗山高中/AI 輔助課程諮詢與學生輔導_講義.docx"],
  ["AI 輔助高中課程諮詢應用_DR.docx", "1麗山高中", "1麗山高中/AI 輔助高中課程諮詢應用_DR.docx"],
  ["AI 輔助高中課程諮詢應用1.png", "1麗山高中", "1麗山高中/AI 輔助高中課程諮詢應用1.png"],
  ["AI 輔助高中課程諮詢應用2.png", "1麗山高中", "1麗山高中/AI 輔助高中課程諮詢應用2.png"],
  ["NotebookLM 課諮師實戰手冊.docx", "2蘭陽女中", "2蘭陽女中/NotebookLM 課諮師實戰手冊.docx"],
  ["課諮師AI研習＿LM簡報.pdf", "2蘭陽女中", "2蘭陽女中/課諮師AI研習＿LM簡報.pdf"],
  ["課諮師AI研習＿大綱簡報2.pdf", "2蘭陽女中", "2蘭陽女中/課諮師AI研習＿大綱簡報2.pdf"],
  ["課諮師AI研習1.png", "2蘭陽女中", "2蘭陽女中/課諮師AI研習1.png"],
  ["課諮師AI研習2.png", "2蘭陽女中", "2蘭陽女中/課諮師AI研習2.png"],
  ["課諮師AI研習3.png", "2蘭陽女中", "2蘭陽女中/課諮師AI研習3.png"],
  ["AI輔助落點分析與面試準備.docx", "3基隆女中", "3基隆女中/AI輔助落點分析與面試準備/AI輔助落點分析與面試準備.docx"],
  ["AI輔助落點分析與面試準備_LM簡報.pdf", "3基隆女中", "3基隆女中/AI輔助落點分析與面試準備/AI輔助落點分析與面試準備_LM簡報.pdf"],
  ["1學習歷程檔案解讀與分析_gemini.pdf", "基隆 AI資料檔案", "3基隆女中/AI輔助落點分析與面試準備/AI資料檔案/1學習歷程檔案解讀與分析_gemini.pdf"],
  ["2學習歷程-課程學習成果呈現指南（互動版）_ChatGPT.pdf", "基隆 AI資料檔案", "3基隆女中/AI輔助落點分析與面試準備/AI資料檔案/2學習歷程-課程學習成果呈現指南（互動版）_ChatGPT.pdf"],
  ["AI 助攻完美備審與高分面試＿義守教務長演講.pdf", "基隆 AI資料檔案", "3基隆女中/AI輔助落點分析與面試準備/AI資料檔案/AI 助攻完美備審與高分面試＿義守教務長演講.pdf"],
  ["NOPQ 撰寫全攻略報導.pdf", "基隆 AI資料檔案", "3基隆女中/AI輔助落點分析與面試準備/AI資料檔案/NOPQ 撰寫全攻略報導.pdf"],
  ["個人履歷怎麼寫_47雲端輔導室.pdf", "基隆 AI資料檔案", "3基隆女中/AI輔助落點分析與面試準備/AI資料檔案/個人履歷怎麼寫_47雲端輔導室.pdf"],
  ["備審資料讀書計畫撰寫指南.pdf", "基隆 AI資料檔案", "3基隆女中/AI輔助落點分析與面試準備/AI資料檔案/備審資料讀書計畫撰寫指南.pdf"],
  ["多元表現綜整心得指南_DR.pdf", "基隆 AI資料檔案", "3基隆女中/AI輔助落點分析與面試準備/AI資料檔案/多元表現綜整心得指南_DR.pdf"],
  ["大學甄選面試口試全攻略.pdf", "基隆 AI資料檔案", "3基隆女中/AI輔助落點分析與面試準備/AI資料檔案/大學甄選面試口試全攻略.pdf"],
  ["大學甄選面試準備研究報告_gemini.pdf", "基隆 AI資料檔案", "3基隆女中/AI輔助落點分析與面試準備/AI資料檔案/大學甄選面試準備研究報告_gemini.pdf"],
  ["大學端審查評量標準深入研究_Gemini.pdf", "基隆 AI資料檔案", "3基隆女中/AI輔助落點分析與面試準備/AI資料檔案/大學端審查評量標準深入研究_Gemini.pdf"],
  ["大學面試準備策略與高分技巧解析.pdf", "基隆 AI資料檔案", "3基隆女中/AI輔助落點分析與面試準備/AI資料檔案/大學面試準備策略與高分技巧解析.pdf"],
  ["學習歷程-大學入學申請第二階段準備指南深入研究_Gemini.pdf", "基隆 AI資料檔案", "3基隆女中/AI輔助落點分析與面試準備/AI資料檔案/學習歷程-大學入學申請第二階段準備指南深入研究_Gemini.pdf"],
  ["自傳撰寫全攻略指南.pdf", "基隆 AI資料檔案", "3基隆女中/AI輔助落點分析與面試準備/AI資料檔案/自傳撰寫全攻略指南.pdf"],
  ["高中學習歷程檔案介紹＿monica.pdf", "基隆 AI資料檔案", "3基隆女中/AI輔助落點分析與面試準備/AI資料檔案/高中學習歷程檔案介紹＿monica.pdf"],
  ["高中學習歷程檔案介紹（重點版）.pdf", "基隆 AI資料檔案", "3基隆女中/AI輔助落點分析與面試準備/AI資料檔案/高中學習歷程檔案介紹（重點版）.pdf"],
  ["AI輔助師生理解『學習歷程檔案』.docx", "學習歷程", "3基隆女中/學習歷程檔案AI導讀研習/AI輔助師生理解『學習歷程檔案』.docx"],
  ["AI 輔助高中課程諮詢應用_LM簡報.pdf", "4新莊高中", "4新莊高中/AI 輔助高中課程諮詢應用_LM簡報.pdf"],
  ["114申請入學簡章.pdf", "Gem檔案", "Gem檔案/114申請入學簡章.pdf"],
  ["課諮師gem檔案1.pdf", "Gem檔案", "Gem檔案/課諮師gem檔案1.pdf"],
  ["課程諮詢地圖.png", "工作手冊", "工作手冊/課程諮詢地圖.png"],
  ["台灣高中課程諮詢教師研究_gemini.pdf", "課諮師工作", "檔案資源/1課諮師工作/台灣高中課程諮詢教師研究_gemini.pdf"],
  ["臺北市課程諮詢工作手冊.pdf", "課諮師工作", "檔案資源/1課諮師工作/臺北市課程諮詢工作手冊.pdf"],
  ["114申請入學簡章.pdf", "Gem檔案", "檔案資源/5 Gem檔案/114申請入學簡章.pdf"],
  ["AI 輔助高中課程諮詢應用_DR.pdf", "檔案資源", "檔案資源/AI 輔助高中課程諮詢應用_DR.pdf"],
  ["課諮師設定提示詞.docx", "提示詞", "檔案資源/課諮師設定提示詞.docx"],
  ["課諮師制度分析_LM筆記簡報.pdf", "課諮制度", "課諮制度/課諮師制度分析_LM筆記簡報.pdf"],
  ["課諮師研究.png", "課諮制度", "課諮制度/課諮師研究.png"],
  ["課諮師職責.png", "課諮制度", "課諮制度/課諮師職責.png"],
  ["課諮師研習案例提示詞.html", "提示詞", "課諮師研習案例提示詞.html"],
  ["AI智慧輔助升學系統(codex優化).html", "網頁程式", "網頁程式/升學輔導/AI智慧輔助升學系統(codex優化).html"],
  ["學習歷程檔案輔助程式(claude優化).html", "網頁程式", "網頁程式/學程檔案/學習歷程檔案輔助程式(claude優化).html"],
  ["AI輔助自主學習（claude優化）.html", "網頁程式", "網頁程式/自主學習/AI輔助自主學習（claude優化）.html"]
];

/* 依副檔名判斷檔案類型，回傳 { type, label, icon } */
function fileMeta(name) {
  const ext = (name.split(".").pop() || "").toLowerCase();
  switch (ext) {
    case "pdf":  return { type: "pdf",   label: "PDF",  icon: "📄" };
    case "docx":
    case "doc":  return { type: "doc",   label: "Word", icon: "📝" };
    case "pptx":
    case "ppt":  return { type: "ppt",   label: "簡報", icon: "📊" };
    case "png":
    case "jpg":
    case "jpeg":
    case "gif":  return { type: "image", label: "圖片", icon: "🖼️" };
    case "html": return { type: "html",  label: "網頁", icon: "🌐" };
    case "mp4":
    case "mov":  return { type: "video", label: "影片", icon: "🎬" };
    case "m4a":
    case "mp3":
    case "wav":  return { type: "audio", label: "語音", icon: "🎧" };
    case "zip":  return { type: "zip",   label: "壓縮", icon: "🗜️" };
    default:     return { type: "other", label: ext.toUpperCase() || "檔案", icon: "📁" };
  }
}

/* ============================================================
   首頁內容資料（index.html 使用）
   ============================================================ */

/* AI 工具箱 */
const FEATURED_TOOLS = [
  {
    title: "AI 輔助自主學習計畫",
    desc: "協助學生把興趣轉化為可執行的自主學習主題、週次規劃、成果形式與反思問題。",
    tags: ["AI工具", "自主學習"],
    links: [
      ["開啟工具", "https://froglssh.github.io/ai-assisted-self-learning-online/"],
      ["使用說明", "https://froglssh.github.io/ai-assisted-self-learning-docs-online/"],
      ["線上版", "網頁程式/自主學習/AI輔助自主學習（claude優化）.html"]
    ]
  },
  {
    title: "學習歷程檔案輔助程式 2.0",
    desc: "用於課程學習成果、多元表現與學習歷程自述的整理、優化與能力標籤化。",
    tags: ["AI工具", "學習歷程"],
    links: [
      ["開啟工具", "https://froglssh.github.io/learning-portfolio-assistant-online/"],
      ["使用說明", "https://froglssh.github.io/learning-portfolio-assistant-docs-online/"],
      ["線上版", "網頁程式/學程檔案/學習歷程檔案輔助程式(claude優化).html"]
    ]
  },
  {
    title: "AI 智慧輔助升學系統",
    desc: "整合申請入學、校系篩選、落點分析、志願排序與升學諮詢所需資料。",
    tags: ["AI工具", "升學"],
    links: [
      ["開啟工具", "https://froglssh.github.io/ai-college-admission-assistant-online/"],
      ["使用說明", "https://froglssh.github.io/ai-college-admission-assistant-docs-online/"],
      ["線上版", "網頁程式/升學輔導/AI智慧輔助升學系統(codex優化).html"]
    ]
  },
  {
    title: "課諮師 Padlet 總入口",
    desc: "原始看板包含 20 個欄位、108 張卡片，是所有研習資源的線上看板。",
    tags: ["入口", "Padlet"],
    links: [["開啟 Padlet", "https://padlet.com/linxiansheng2_1/padlet-i35prmxgc2r54tj9"]]
  },
  {
    title: "課諮師 AI 研習雲端資料夾",
    desc: "Google Drive 原始資料夾，含各校場次、工作手冊、課諮制度、檔案資源與 Gem 檔案。",
    tags: ["雲端", "檔案"],
    links: [["開啟雲端", "https://drive.google.com/drive/folders/1fsx8kElCGpMUb97z383U6h3-kfpUWN-q?usp=drive_link"]]
  },
  {
    title: "課諮師研習案例提示詞",
    desc: "課諮師研習案例與提示詞網頁，可作為 AI 實作演練與分組任務素材。",
    tags: ["提示詞", "案例"],
    links: [["雲端檔案", "課諮師研習案例提示詞.html"], ["線上版", "https://claude.ai/public/artifacts/0b23ef7c-eea1-4a85-b8f8-fb63d3546769"]]
  }
];

/* 課程模組 */
const MODULES = [
  {
    cat: "制度",
    title: "課諮師任務與職責",
    desc: "建立課諮師工作定位、任務範圍、輔導鐵三角分工與年度工作節奏。",
    tags: ["課諮制度", "工作手冊", "NotebookLM"],
    links: [
      ["任務與職責 LM 簡報", "課諮制度/課諮師任務與職責＿LM簡報.pdf"],
      ["制度分析 LM 簡報", "課諮制度/課諮師制度分析_LM簡報.pdf"],
      ["工作手冊", "工作手冊/臺北市課程諮詢工作手冊＿原始檔.pdf"]
    ]
  },
  {
    cat: "AI",
    title: "課諮師 AI 系統建置",
    desc: "把課諮手冊、升學簡章、學群資料與案例提示詞整理成 GPT、Gemini、NotebookLM 可使用的資料庫。",
    tags: ["AI系統", "提示詞", "資料庫"],
    links: [
      ["課諮師設定提示詞", "檔案資源/課諮師設定提示詞.pdf"],
      ["課諮師 Gem 檔案", "檔案資源/5 Gem檔案/課諮師gem檔案.pdf"],
      ["NotebookLM", "https://notebooklm.google/"]
    ]
  },
  {
    cat: "學檔",
    title: "學習歷程檔案導讀",
    desc: "協助老師與學生理解學習歷程檔案的精神、上傳項目、選材邏輯與反思寫作。",
    tags: ["學習歷程", "課程成果", "多元表現"],
    links: [
      ["AI 輔助師生理解學檔", "3基隆女中/學習歷程檔案AI導讀研習/AI輔助師生理解『學習歷程檔案』.pdf"],
      ["學檔解讀與分析", "檔案資源/2學習歷程檔案/1學習歷程檔案解讀與分析_gemini.pdf"],
      ["高中學習歷程重點", "3基隆女中/AI輔助落點分析與面試準備/AI資料檔案/高中學習歷程檔案介紹（重點版）.pdf"]
    ]
  },
  {
    cat: "學檔",
    title: "課程學習成果呈現",
    desc: "把課堂作品轉化為能呈現能力、過程、修正與反思的學習成果。",
    tags: ["課程學習成果", "導讀簡報"],
    links: [
      ["呈現指南部分 1", "檔案資源/2學習歷程檔案/學習歷程-課程學習成果呈現指南-互動版_部分1.pdf"],
      ["呈現指南部分 2", "檔案資源/2學習歷程檔案/學習歷程-課程學習成果呈現指南-互動版_部分2.pdf"],
      ["導讀公版簡報", "檔案資源/2學習歷程檔案/學習歷程-課程學習成果呈現指南-導讀公版簡報.pdf"]
    ]
  },
  {
    cat: "選課",
    title: "學群、課程地圖與選組輔導",
    desc: "使用十八學群、學類對照、課程地圖與班群手冊，協助學生把興趣、能力與選課連起來。",
    tags: ["選課", "十八學群", "課程地圖"],
    links: [
      ["課程諮詢地圖", "工作手冊/課程諮詢地圖.png"],
      ["十八學群介紹", "檔案資源/4學群選課資訊/十八學群介紹_嘉女網頁資料.pdf"],
      ["學群選才與適性選修", "檔案資源/4學群選課資訊/大學十八學群選才與高中適性選修課程對應.pdf"]
    ]
  },
  {
    cat: "升學",
    title: "申請入學制度與第二階段準備",
    desc: "整理 114/115 申請入學、繁星、考試簡章、第二階段備審與面試準備重點。",
    tags: ["申請入學", "第二階段", "簡章"],
    links: [
      ["115 申請入學總則", "檔案資源/3多元入學資訊/115學年度大學申請入學招生簡章總則.pdf"],
      ["115 申請入學規定", "檔案資源/3多元入學資訊/115學年度大學申請入學招生規定.pdf"],
      ["第二階段準備指南", "檔案資源/3多元入學資訊/學習歷程-大學入學申請第二階段準備指南-互動版0314.pdf"]
    ]
  },
  {
    cat: "升學",
    title: "備審、面試與 AI 指令集",
    desc: "以提示詞和資料庫輔助自傳、讀書計畫、NOPQ、多元表現綜整心得與面試演練。",
    tags: ["備審", "面試", "提示詞"],
    links: [
      ["AI 輔助落點與面試講義", "3基隆女中/AI輔助落點分析與面試準備/AI輔助落點分析與面試準備.pdf"],
      ["GPT 設定提示詞", "3基隆女中/AI輔助落點分析與面試準備/提示詞/備審與面試設定提示詞_GPT.pdf"],
      ["AI 指令集", "3基隆女中/AI輔助落點分析與面試準備/提示詞/AI指令集：課業.學檔.自學.備審.pdf"]
    ]
  },
  {
    cat: "升學",
    title: "落點分析與志願選填",
    desc: "用歷屆分數、累積人數、校系分則與外部落點網站，協助學生建立志願分層。",
    tags: ["落點分析", "學測", "志願"],
    links: [
      ["大學申請入學網站", "https://www.cac.edu.tw/apply115/index.php"],
      ["校系分則查詢", "https://www.cac.edu.tw/apply115/system/ColQry_115xappLyfOrStu_Azd5gP29/LP_MultiQuery/index.php"],
      ["University TW", "https://university-tw.ldkrsi.men/"]
    ]
  },
  {
    cat: "實作",
    title: "各校研習講義與簡報",
    desc: "麗山、蘭陽、基隆、新莊場次可作為不同研習長度與對象的範例版本。",
    tags: ["研習講義", "場次教材"],
    links: [
      ["麗山講義", "1麗山高中/AI 輔助課程諮詢與學生輔導_講義.pdf"],
      ["蘭陽 NotebookLM 手冊", "2蘭陽女中/NotebookLM 課諮師實戰手冊.pdf"],
      ["基隆落點與面試", "3基隆女中/AI輔助落點分析與面試準備/AI輔助落點分析與面試準備.pdf"]
    ]
  }
];

/* 網站與影片資源：[名稱, 連結, 說明] */
const WEBSITES = [
  ["ChatGPT", "https://chat.openai.com/", "AI 對話、提示詞、學生案例討論與文字生成。"],
  ["Claude", "https://claude.ai/chats", "長文整理、案例提示詞、互動網頁原型。"],
  ["Gemini", "https://gemini.google.com/app", "Google 生態系 AI，適合和 Drive、Gem、NotebookLM 串接。"],
  ["NotebookLM", "https://notebooklm.google/", "把手冊與簡章變成可問答的研習資料庫。"],
  ["Felo Search", "https://felo.ai/zh-Hant/search", "快速整理公開資料、產生研究報告與網頁摘要。"],
  ["Perplexity", "https://www.perplexity.ai/", "即時搜尋、來源查核與升學資訊初步彙整。"],
  ["大學甄選入學委員會", "https://www.cac.edu.tw/apply115/index.php", "115 大學申請入學官方入口。"],
  ["校系分則查詢", "https://www.cac.edu.tw/apply115/system/ColQry_115xappLyfOrStu_Azd5gP29/LP_MultiQuery/index.php", "查詢申請入學校系分則與準備方向。"],
  ["IOH 開放個人經驗平台", "https://ioh.tw/", "大學生科系經驗分享，適合學生探索學群與科系。"],
  ["104 學習歷程檔案", "https://student.104.com.tw/epf/", "高中職升學、探索與學習歷程支援。"],
  ["優歷 Yory", "https://www.yory.school/", "學習歷程與升學輔導平台。"],
  ["1111 落點分析", "https://exam-match.1111.com.tw/", "外部落點分析網站，可作交叉參考。"]
];
