const netflixOriginals = [
  {
    url:
      "https://occ-0-2611-3662.1.nflxso.net/dnm/api/v6/ifCRgpXJMAE_puF509EDR7a7mqU/AAAABUsFL02zTanz42bkWX-RzL_U9UqfKCyNkXal5ejuy3L4_ZJo1LSjNRhDQWrm6lhw1x2llWqy4vaVCmf24xqfY3Dz41_ellqDMx-bUBFnMcABK1DaxzFfUZK1pLyfaEap7q0chnih9mOZBXHMfy56-DmmbhVxsSWlCmJfLZupfWhkHLcqR7485nPRG2OpVaIFJouNK_oyXc8EvUzaIjFaBEuCWqGP-iLl7-0Cyq-KIA.jpg?r=1c0",
    title: "Locked Up",
    type: "large",
  },
  {
    url:
      "https://occ-0-2611-3662.1.nflxso.net/dnm/api/v6/ifCRgpXJMAE_puF509EDR7a7mqU/AAAABTaDlnQtnbYvKXOz3GwmKBTZttwM4MfynbmAzUegNbD6amR8s8nIVyvYIWDE5orrj5pxPdBt1kvZ5EwVtbJXeL6l4ld8Xz-yXa0tal9SviZklGiR_GBRfhRB9QF3J281TQ5WDmDTe5Y3bNZLEuRUjGB_fd56looFJmT0uLlAKKCuOl_w_psHYWhUmOoHoG8XSnU0RQbIBIljRjhBQ9O7glsPXwJvH2Js_NPFuSMRTdZpR9wCI7YPNy9AC4AtJ9Svm7o.jpg?r=b0a",
    title: "Indian Matchmaking",
    type: "large",
  },

  {
    url:
      "https://occ-0-2611-3662.1.nflxso.net/dnm/api/v6/ifCRgpXJMAE_puF509EDR7a7mqU/AAAABTY8Qe4O8Lbla33KRSwOAuSB5RWHWahqiMIurg1jGE64K-u-MDyZC9xAh99XX8Iman67mOMcFe5pMu7V4TwENG72LGxSEJfYgPvC4bXFMoOldhnZrKWkqYc-tiVkeFtdQ7puICRkB0Xxvdvb6G7IatmfjK-29dJjb-oVtirY6dYADgqyQEdf6UkQ6KYkw9Ig8L5gv6W0XBK-FBO8qeOwaM9QjRekwIZT9QIEjuqfdSJ_7RuNdxgngHHDGmhC9VABHw8.jpg?r=79b",
    title: "Cursed",
    type: "large",
  },
  {
    url:
      "https://occ-0-2611-3662.1.nflxso.net/dnm/api/v6/ifCRgpXJMAE_puF509EDR7a7mqU/AAAABSu6lG2dHhLugfplYNIH3t9tZ00nll8buHYaK_eOJM8ZlnjuGtyYexOLeYdhqrXfPUOVIDMeEjWd4_y8LCkxPPfvjYjqjdzZa3ZyeIQc3X0CX-mCUBhmQvqsN64K2qn8R7pDsyAnrqy0I1Iqev-mPQA9xc6OIpGlmLB19OPZdrNKvNWrNhtzpaCD6e5qDsOdQFlgcM7X.jpg?r=88c",
    title: "You",
    type: "large",
  },
  {
    url:
      "https://occ-0-2611-3662.1.nflxso.net/dnm/api/v6/ifCRgpXJMAE_puF509EDR7a7mqU/AAAABWSjlZyJd6bnJtFXHydRNNC0swWRZ86ZUIL3yBKySOPrnl5SA4uVMkUABqJ-408TDjbwx3CpVnB5QeJN1ZRZEzwdKfV-cbT7PqWL0N5VC9EW14kzfxSkxoAi3SwzFmD4ES0EYkVWp5ceubT8GTGN1jxNw-KGlpWatQR86gBWT5TADsPedfSsoRXB1WOmVAv8E2GwlI-w.jpg?r=b73",
    title: "Seriously Single",
    type: "large",
  },

  {
    url:
      " https://occ-0-2611-3662.1.nflxso.net/dnm/api/v6/ifCRgpXJMAE_puF509EDR7a7mqU/AAAABf7IPEUIu1sFCB14ErprjRCbBE9OqSwLLCzMiVqEmTS74MSeSiDAG_pKIFJ2nHuAsvtqccOHTkVq9iG3hXUSjmgvRdlFSz8GWbLlHd7kUdrMmiA9HFGZljSND42TnuPJL8wPVESfKV5ITTwCvlGrV6rN56xtUi1v6aBxiS3IrksDVobYlBSk3SScl6KabsWbmq5n6D-3ZKn6Aa6zFmabC-Rr8ZzH9YKXyaOpTy76OIwgcuWiavtMvCxVClr3whrNaMY.jpg?r=936",
    title: "Raat Akeli Hai",
    type: "large",
  },
  {
    url:
      "https://occ-0-2611-3662.1.nflxso.net/dnm/api/v6/ifCRgpXJMAE_puF509EDR7a7mqU/AAAABQ_-WRp6z3pg4tEscooa1SA_xpOaIVIVPUqpfgaV1fHZoSsf3Wmj6hXanLA5-BFqJ3ie9TvNpaiqgNYGXAj153hGaRfoJrbHRqYBEPVS85noIZH40_tKzTCCvURfSQr-pAvh7LmSPVuKRoHz7gS5lx0bc9ZzENMb3_uah-S10OflLLzglyC_RfPV1lKeOTEVQ2qR8rEgaq_afdoPADlKWSRWd_PTePJMGMSbVAEoOtDLS2a9MQzeoUddQUeYQiEGd50.jpg?r=dba",
    title: "Dark Desire",
    type: "large",
  },
];

const continueWatching = [
  {
    url:
      "https://occ-0-2611-3662.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABXXeXxkqk3WQL0iHAC_0HSe-vAQCAWnSm3eu2pTmY6JpoBHts13azmklW2ob3ZqCo_PG-n5aajAWwNxaig3N9dBfOdszkeIt7c-Du7GASC5XlyQpjq3ZC7sABNa-TMNNAaV8H0iY9Rt-lLKt6D-mWSmM5ictQg.jpg?r=ea6",
    title: "The Umbrella Academy",
    type: "small",
  },
  {
    url:
      "https://occ-0-2611-3662.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABYH2NeSCrZJbojQNC69UbzUxu-jwX2dgqQWMAJbtiuJbIzQo2VIchr0xA4fcKDMeCd8rIaWrtrInjPLJPEinIHTtlwuvVUkfoSVLCC0FsZbeitzjkb59WE243pSl.jpg?r=aef",
    title: "Transformers",
    type: "small",
  },
  {
    url:
      "https://occ-0-2611-3662.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABX9h2O9Nilwq-zVOt9-mXf2BVgksDmFnKPsPjECauxYkA_kYZjmQvcCH4sOFTGAP9lym2gY3h0LP_xGxs-JhJ2e2w_yoVXfKQUuel_6itGvHgrCNDwnb4Fhpgy4k.jpg?r=9a1",
    title: "ZNation",
    type: "small",
  },
  {
    url:
      "https://occ-0-2611-3662.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZHmIftdkcUFlBJSlJKVnv1D0IeUrgKRB2qJjRj8rgO5WlqWasph4nVtDblU85ScRjTsMSptdXQZ9EIeewh4PweAIDApbCbsa7V_LXm-EvtLiecf-wc6tO3tcbIQ.jpg?r=923",
    title: "Day Break",
    type: "small",
  },
  {
    url:
      " https://occ-0-2611-3662.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABfeArTaW9XAQe4vqb2mFOP4sRPU0YujWLNqGapvmr6a0hzRWP0wuyOcODGEoWsFqR4sfm_HcufU4Hp6V0sV9weJ2ES7ZPvnpqsvhKsTUlvKvUi8NWoGztQhiaF7sU1XtfjhUIPFKI9CLfLEAiUnN_nXMQp2feeMvHGZ8-o60Vlb2udnVVK6_6D8.jpg?r=704",
    title: "The Kissing Booth 2",
    type: "small",
  },
];

const trending = [
  {
    url:
      "https://occ-0-2611-3662.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWIVYrM6R-s9DH111jtwE1t1lXSqbd6PU91ky6mSUuQQjfrfYkRMeVtvlJ1axmikhyJL_-HUN1L4c3baorsnxFhiYguss8OqaJhm1mWYw3FZLfW3lq-0ByPj-4hp.jpg?r=9f8",
    title: "The Politician",
    type: "small",
  },
  {
    url:
      "https://occ-0-2611-3662.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABX9h2O9Nilwq-zVOt9-mXf2BVgksDmFnKPsPjECauxYkA_kYZjmQvcCH4sOFTGAP9lym2gY3h0LP_xGxs-JhJ2e2w_yoVXfKQUuel_6itGvHgrCNDwnb4Fhpgy4k.jpg?r=9a1",
    title: "Santa Clarita Diet",
    type: "small",
  },
  {
    url:
      "https://occ-0-2611-3662.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABffdaxVS04kbLsX7XBJP15pLe4qLF34U8Y0RF-VD6CrVcSMFIDJzJrH-iVaDpDJ7g5-ZVd5gJRGCwCbGUfYH4RXWXiFKcQQ-BubgDFPWYbX7XGQ7saioRwqpq0wm1GpRrBi1TagCyUoQBFwl-4skYzWH8XD5zg.jpg?r=e5e",
    title: "Norsemen",
    type: "small",
  },
  {
    url:
      "https://occ-0-2611-3662.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABWVcAPOyNoffLvN7va7hqyW2EgKm9xfTGMK7CJtG0BBhcyhBEXAi73suDzWvlhYDf3i-X_wM1RVGQsf2GCHbDmxeURnC79ImkM0ZdZHKd08YXLHjg82zNixojiJs.jpg?r=390",
    title: "Get even",
    type: "small",
  },
  {
    url:
      "https://occ-0-2611-3662.1.nflxso.net/dnm/api/v6/X194eJsgWBDE2aQbaNdmCXGUP-Y/AAAABZmnIN9i1Oijo-oqwvmKcRmzlqK7i0oKKKRYkzknJwWMrVvMaz4EgQz2KzESdN6ryAWRqRrTrbymAtxLVCaI1fLsX4ELXeyeBkJHa6v6I_-wGSJBbtJCJDnIbtqe.jpg?r=4e4",
    title: "YOU",
    type: "small",
  },
];

export { netflixOriginals, continueWatching, trending };
