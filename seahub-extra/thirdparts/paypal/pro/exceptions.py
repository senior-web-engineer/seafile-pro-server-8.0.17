


class PayPalFailure(Exception):
    def __init__(self, msg, nvp=None):
        super(PayPalFailure, self).__init__(msg)
        self.nvp = nvp

    def __str__(self):
        return '{0}, nvp={1}'.format(self.message, repr(self.nvp))
