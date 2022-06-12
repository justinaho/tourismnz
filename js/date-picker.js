$ (function datepicker() {

  $ ("#valiDate").validate();

  $ ("[type=date]").datepicker() ({
    onClose: function() {
      $ (this).valid();
    }
  });
});
