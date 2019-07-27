<mj-wrapper>
      <mj-hero
        mode="fluid-height"
        height="<?= $_POST['backgroundHeight']?>px";
        background-width="600px"
        background-height="<?= $_POST['backgroundHeight']?>px";
        background-url="header.png"
        padding="20px 0"
        vertical-align="bottom"
      >

      <mj-button background-color="<?=$item['color']?>" color="white" href="https://<?=$item['brand_url'].$_POST['url1']?>?utm_source=newsletter&amp;utm_campaign=<?=$_POST['date']?>">
        <?=$_POST['cta1']?>
      </mj-button>
        </mj-hero>
    </mj-wrapper>
